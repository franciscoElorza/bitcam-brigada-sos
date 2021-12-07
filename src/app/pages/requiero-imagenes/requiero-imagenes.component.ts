import { Component, OnDestroy, OnInit } from '@angular/core';
import { CargarScriptsService } from 'src/app/services/cargar-scripts.service';
import { Location } from '@angular/common';
import { NgForm } from '@angular/forms';

import { ImagenesService } from 'src/app/services/imagenes.service';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Imagen } from 'src/app/models/imagenes.interface';


@Component({
  selector: 'app-requiero-imagenes',
  templateUrl: './requiero-imagenes.component.html',
  styleUrls: ['./requiero-imagenes.component.css']
})
export class RequieroImagenesComponent implements OnInit {
  
  // FORMULARIO REACTIVO
  buscadorForm: FormGroup;
  imagenes: any[];

  mensaje_seleccion:boolean = true;
  mensaje_padecimiento:string = '';

  constructor(
              private _cargaScripts: CargarScriptsService, 
              private formBuil: FormBuilder,
              private http: HttpClient,
              private location: Location, 
              private  imgSvc: ImagenesService,
              
              ) {
    // Script a Cargar de javascript
    this._cargaScripts.carga(["chatbot"]);
    this.createForm();
  }
  

  ngOnInit(): void {
   
  }

  regresar(){
    this.location.back();
  }

  get categoriaInvalido(){
    return this.buscadorForm.get('categoria').invalid && this.buscadorForm.get('categoria').touched
  }

  createForm(){
    this.buscadorForm = this.formBuil.group(
      {
        categoria: ['', Validators.required]
      }
    );
  }

  onBuscar(){

    this. mensaje_seleccion = false;

    if(this.buscadorForm.valid && this.buscadorForm.value.categoria == 'Quemadura'){
      this.getImagenesQuemadura();   
      this.mensaje_padecimiento = 'Cómo tratar una quemadura - Tratamiento rápido';
    }
    
    else if(this.buscadorForm.valid && this.buscadorForm.value.categoria == 'Heridas'){
      this.getImagenesHeridas();
      this.mensaje_padecimiento = 'Cómo curar las heridas abiertas rápidamente';
    }
    else if(this.buscadorForm.valid && this.buscadorForm.value.categoria == 'Hematoma'){
      this.getImagenesHematoma();
      this.mensaje_padecimiento = 'Cómo curar un hematoma';
    }
    else if(this.buscadorForm.valid && this.buscadorForm.value.categoria == 'Sangrado'){
      this.getImagenesSangrado();
      this.mensaje_padecimiento = 'Cómo detener un sangrado';
    }

    else{
      console.log("Tu formulario esta mal o no hay datos con ese resultado");
    }
  }

  // Filtrados api
  getImagenesQuemadura(){
    console.log('Valor Quemadura');
    console.log(this.buscadorForm.value);
    this.imgSvc.getImagenesQuemadura().subscribe(data => {
      console.log(data);
      this.imagenes = data;
     });
  }

    getImagenesHeridas(){
      console.log('Valor Heridas');
      console.log(this.buscadorForm.value);
      this.imgSvc.getImagenesHeridas().subscribe(data => {
        console.log(data);
        this.imagenes = data;
       });
    }
    
    getImagenesHematoma(){
      console.log('Valor Hematoma');
      console.log(this.buscadorForm.value);
      this.imgSvc.getImagenesHematoma().subscribe(data => {
        console.log(data);
        this.imagenes = data;
       });
    } 

    getImagenesSangrado(){
      console.log('Valor Sangrado');
      console.log(this.buscadorForm.value);

      this.imgSvc.getImagenesSangrado().subscribe(data => {
        console.log(data);
        this.imagenes = data;
       });
    } 

  // Filtrados firebase
  // getImagenesQuemadura(){
  //   console.log('Valor cortada');
  //   console.log(this.buscadorForm.value);
  //   this.imgSvc.col$('imagenes', ref => ref.where('categoria', '==',  "Quemadura")).subscribe( datos => {
  //     this.imagenes = datos;
  //     console.log(datos);
  //   });
  // }

  //   getImagenesHeridas(){
  //     console.log('Valor Heridas');
  //     console.log(this.buscadorForm.value);
  //     this.imgSvc.col$('imagenes', ref => ref.where('categoria', '==',  "heridas")).subscribe( datos => {
  //       this.imagenes = datos;
  //       console.log(datos); 
        
  //     });
  //   }
    
  //   getImagenesHematoma(){
  //     this.imgSvc.col$('imagenes', ref => ref.where('categoria', '==',  "Hematoma")).subscribe( datos => {
  //       this.imagenes = datos;
  //       console.log(datos);
  //     });
  //   } 

  //   getImagenesSangrado(){
  //     this.imgSvc.col$('imagenes', ref => ref.where('categoria', '==',  "Sangrado")).subscribe( datos => {
  //       this.imagenes = datos;
  //       console.log(datos);
  //     });
  //   } 

}
