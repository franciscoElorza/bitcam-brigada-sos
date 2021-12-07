import { AuthService } from 'src/app/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-verificar-email',
  templateUrl: './verificar-email.component.html',
  styleUrls: ['./verificar-email.component.css']
})
export class VerificarEmailComponent implements OnInit {

  public user$: Observable<any> = this.authSvc.afAuth.user;

  constructor(private authSvc: AuthService) { }

  ngOnInit(): void {
  }

  // Accion para volver a enviar el corrego de verificacion, en caso de que el usuario se ha olvidado de verificarlo
  enviarEmail():void{
    // Service  enviarEmail()
    this.authSvc.enviarVerificacionEmail();
  }

}
