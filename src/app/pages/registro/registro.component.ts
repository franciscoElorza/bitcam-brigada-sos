import { CargarScriptsService } from 'src/app/services/cargar-scripts.service';
import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

import { AuthService } from './../../services/auth.service';
import { Router } from '@angular/router';

declare function mostrarPassword(): any;

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  registerForm:FormGroup

  constructor(private formBuil: FormBuilder, private authSvc: AuthService, private router: Router, private _cargaScripts: CargarScriptsService) {
      this._cargaScripts.carga(["mostrarocultarpassword"]);
      this.createFormulario();
  }

  ngOnInit(): void {
  }


  get emailInvalido(){
    return this.registerForm.get('email').invalid && this.registerForm.get('email').touched
  }

  get passwordInvalido(){
    return this.registerForm.get('password').invalid && this.registerForm.get('password').touched
  }

  createFormulario(){
    this.registerForm = this.formBuil.group(
      {
        email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
        password:['', [Validators.required, Validators.minLength(8)]],
      }
    );
  }


  async onRegistro(){
    // obteniendo(extraemos) propiedades y lo pasamos en la funcion
    const { email, password } = this.registerForm.value;
    try{
      const user = await this.authSvc.registro(email, password);
      if(user){// Comprobamos que existe el usuario
        console.log('USER->', user);
        this.router.navigate(['/verificar-email']);
      }else{
        window.alert('La dirección de correo electrónico ya está en uso por otra cuenta.'); 
      }
    }
    catch(error){
      console.log(error);
    }
  }

  mostrarPassword(){
    mostrarPassword();
  }
}

