import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from 'src/app/services/auth.service';
import { Location } from '@angular/common';
import { CargarScriptsService } from 'src/app/services/cargar-scripts.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  // Propiedad para saber si nuestro usuario esta logeado o no
  // pARA LOGEO
  // public isLogged: boolean = false;
  // public user: any;// user
  public user$: Observable<any> = this.authSvc.afAuth.user;

  constructor(private authSvc: AuthService, 
              private router: Router, 
              private location: Location,
              private _cargaScripts: CargarScriptsService, 
              ) { 
              }

  async ngOnInit(){

  }

  async cerrarSesion(){
    try{
      await this.authSvc.logout();
      this.router.navigate(['/login']);
      window.location.reload(); 

       // Vuelve a cargar la página actual sin la caché del navegador
      //  True:- Volverá a cargar la página desde server(uncached).
      // False (predeterminado):- Volverá a cargar la página almacenada en caché.
      //  location.reload();   
    }
    catch(error){
      console.log(error)
    }
  }

  regresar(){
    this.location.back();
  }




}
