import { AuthService } from './../../services/auth.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { CargarScriptsService } from 'src/app/services/cargar-scripts.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  public user$: Observable<any> = this.authSvc.afAuth.user;

  constructor(private authSvc: AuthService,  
              private router: Router, 
              private _cargaScripts: CargarScriptsService) {
    // Script a Cargar de javascript
    this._cargaScripts.carga(["chatbot"]);
  }
  
  ngOnInit(): void {
  
  }
  
  async cerrarSesion(){
    try{
      await this.authSvc.logout();
      this.router.navigate(['/login']);
      window.location.reload(); 

    }
    catch(error){
      console.log(error)
    }
  }
}
