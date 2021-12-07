import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { AngularFireAuth } from '@angular/fire/auth';

import { take, switchMap } from 'rxjs/internal/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private auth: AngularFireAuth, private router: Router){

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    return this.auth.authState.pipe(
      take(1),
      switchMap(async (authState)=>{
        // Si se encuentra autenticado lo dejo pasar a la ruta
        if(authState){
          return true;
        }else{//si no
          this.router.navigate(['/login']);
          console.log('No autenticado');
          return false;
        }
      })
    )
  }
}
