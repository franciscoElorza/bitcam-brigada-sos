import { first, map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

//Modulos de firebase
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
// import { auth } from 'firebase/app'
// import {User} from 'firebase';
import firebase from 'firebase/app';
import 'firebase/auth';

// Interfaces de modelos
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public user: firebase.User;

  constructor(public afAuth: AngularFireAuth, public db: AngularFirestore ) {

  }


/*
..........##.......##....##.....##.########.########..#######..########...#######...######.....##........#######...######...####.##....##
.........##.......##.....###...###.##..........##....##.....##.##.....##.##.....##.##....##....##.......##.....##.##....##...##..###...##
........##.......##......####.####.##..........##....##.....##.##.....##.##.....##.##..........##.......##.....##.##.........##..####..##
.......##.......##.......##.###.##.######......##....##.....##.##.....##.##.....##..######.....##.......##.....##.##...####..##..##.##.##
......##.......##........##.....##.##..........##....##.....##.##.....##.##.....##.......##....##.......##.....##.##....##...##..##..####
.....##.......##.........##.....##.##..........##....##.....##.##.....##.##.....##.##....##....##.......##.....##.##....##...##..##...###
....##.......##..........##.....##.########....##.....#######..########...#######...######.....########..#######...######...####.##....##
 */

  // ResetPassword
  // Recibe como parametro email para saber a que cuenta se va a restablecer la contraseña
  async restablecerPassword(email:string): Promise<void>{
    try{
      return this.afAuth.sendPasswordResetEmail(email);
    }
    catch(error){
      console.log(error);
    }
  }

  // sendEmail -Enviar email para verificacion
  async enviarVerificacionEmail(): Promise<void>{
    // Cuando registramos nuestro usuario la libreria loga nuestro usuario
    return (await this.afAuth.currentUser).sendEmailVerification();
  }

  async login(email:string, password:string){
    try{ // Try cuando va bien
      const result = await this.afAuth.signInWithEmailAndPassword(
        email,
        password
      );
      return result;
    } catch(error){ // Catch cuando algo sale mal
      console.log('error ->', error);
    }
  }

  async loginGoogle(){
    try{
      // return this.afAuth.signInWithPopup(new auth.GoogleAuthProvider());
      return this.afAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    }catch(error){
      console.log(error);
    }
  }

  async onloginFacebook(){
    try{
      return this.afAuth.signInWithPopup(new firebase.auth.FacebookAuthProvider());
    }catch(error){
      console.log(error);
    }
  }

  async registro(email:string, password:string){
    try{
    const result = await this.afAuth.createUserWithEmailAndPassword(
      email,
      password
      );
      this.enviarVerificacionEmail();
      return result;
    }catch(error){
      console.log('error ->', error);
    }
  }

  async logout(){
    try{
      await this.afAuth.signOut();
      // Redireccion o en caso de que tengamos en el localStorage alguna inormacion referente al usuario la deberiamos borrar
    } catch (error){
      console.log('error ->', error);
    }
  }

  // Recuperar el usuario que esta logeado
  isAuth(){
    return this.afAuth.authState.pipe(map(auth =>auth));
  }

}
