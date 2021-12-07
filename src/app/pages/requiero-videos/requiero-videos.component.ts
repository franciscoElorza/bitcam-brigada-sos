import { Component, OnInit } from '@angular/core';
import { CargarScriptsService } from 'src/app/services/cargar-scripts.service';
import { Location } from '@angular/common';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-requiero-videos',
  templateUrl: './requiero-videos.component.html',
  styleUrls: ['./requiero-videos.component.css']
})
export class RequieroVideosComponent implements OnInit {

  buscadorForm:FormGroup

  busqueda: string;
  mensaje_seleccion:boolean = true;

  resultado_busqueda: boolean = false;

  constructor(private _cargaScripts: CargarScriptsService, 
              private formBuil: FormBuilder,
              private location: Location) {
    // Script a Cargar de javascript
    this._cargaScripts.carga(["youtube", "chatbot"]);
    this.createFormulario();
  }

  ngOnInit() {
  
  }
  regresar(){
    this.location.back();
  }

  createFormulario(){
    this.buscadorForm = this.formBuil.group(
      {
        busqueda: [''],
      }
    );
  }


  buscarVideo(){
    this. mensaje_seleccion = false;

    if(this.buscadorForm.valid){
      this.busqueda = this.buscadorForm.value.busqueda
      this.resultado_busqueda = true
    }
   

  }

}





