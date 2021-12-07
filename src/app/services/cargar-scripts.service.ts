import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CargarScriptsService {

    //Servicio para cargar archivos de javascript
    constructor() { }

    carga( archivos: string[] ){
      // Tener acceso a cada uno de los scripts individuales que recibiremos en la funcion
      for (let archivo of archivos)
      {
        let script =  document.createElement("script");
        script.src = "../../assets/js/" + archivo + ".js";

        //obtener el body
        let body = document.getElementsByTagName("body")[0];
        body.appendChild( script);
        console.log("script creado:" + script);
        
      }
    }
}
