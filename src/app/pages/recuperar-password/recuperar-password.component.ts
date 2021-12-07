import { AuthService } from 'src/app/services/auth.service';
import { Component, OnInit } from '@angular/core';

import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-recuperar-password',
  templateUrl: './recuperar-password.component.html',
  styleUrls: ['./recuperar-password.component.css']
})
export class RecuperarPasswordComponent implements OnInit {

  userEmail = new FormControl('');

  constructor(private authSvc: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  async restablecerPassword(){
    try{
      const email = this.userEmail.value;
      await this.authSvc.restablecerPassword(email);
      window.alert('Correo electrónico enviado, revise su bandeja de entrada!'); // Cuando enviamos el email pues lo correcto seria indicarle al usuario de alguna manera que se ha enviado el email
      this.router.navigate(['/login']);
    }catch(error){
      console.log(error);
    }
  }
}
