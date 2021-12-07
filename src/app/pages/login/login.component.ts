import { AuthService } from 'src/app/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { CargarScriptsService } from 'src/app/services/cargar-scripts.service';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';


declare function mostrarPassword(): any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup

  public isLogged: boolean = false;


  constructor(private authSvc: AuthService,  private formBuil: FormBuilder, private router: Router, private _cargaScripts: CargarScriptsService) {
    this._cargaScripts.carga(["mostrarocultarpassword", "chatbot-dialogflow"]);
    this.createFormulario();
  }

  ngOnInit(): void {

  }

  get emailInvalido(){
    return this.loginForm.get('email').invalid && this.loginForm.get('email').touched
  }
  get passwordInvalido(){
    return this.loginForm.get('password').invalid && this.loginForm.get('password').touched
  }

  createFormulario(){
    this.loginForm = this.formBuil.group(
      {
        email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],

        password:['', [Validators.required, Validators.minLength(8)]],
      }
    );
  }

  async onLogin(){
    // obteniendo(extraemos) propiedades y lo pasamos en la funcion
    const { email, password } = this.loginForm.value;
    // Este metodo nos devolvera una promesa
    try{
      const user = await this.authSvc.login(email, password);
      // si tenemos un usuario y el correo esta verificado
      if(user && user.user.emailVerified){
        console.log('USER->', user);
        this.router.navigate(['/bienvenida']);
      }else if(user){ //Si existe usuario pero email no esta verificado
        this.router.navigate(['/verificar-email']);
      }else{
        // this.router.navigate(['/registro']);
        window.alert('La cuenta no existe o ingreso datos erroneos!'); // Cuando enviamos el email pues lo correcto seria indicarle al usuario de alguna manera que se ha enviado el email
      }
    }catch(error){
      console.log(error.message);
    }
  }

  async loginGoogle(){
    try{
      this.authSvc.loginGoogle();
      this.getCurrentUser();

    }catch(error){
      console.log(error);
    }
  }

  loginFacebook(){
    try{
      this.authSvc.onloginFacebook();
      this.getCurrentUser();

    }catch(error){
      console.log(error);
    }
  }

  mostrarPassword(){
    mostrarPassword();
  }


  // Metodo para obtener el estado del usuario
  getCurrentUser(){
    this.authSvc.isAuth().subscribe( auth =>{
      if(auth ){
        // alert('Usuario logeado')
        console.log('Usuario logeado');
        this.isLogged = true;
        this.router.navigate(['/bienvenida']);

      }else{
        console.log('El usuario no esta logeado');
        this.isLogged = false;
      }
    })
  }
}


