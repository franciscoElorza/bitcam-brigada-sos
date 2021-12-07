import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Imagen } from '../models/imagenes.interface';

// Firebase
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

// type CollentionPredicate<T> = string | AngularFirestoreCollection


@Injectable({
  providedIn: 'root'
})
export class ImagenesService {

  constructor(
              private http: HttpClient, 
              private afs: AngularFirestore
              ) { }

  //obtener datos de la api
  getImagenesHeridas(){

    // let header = new HttpHeaders()
    // .set ('Type-content', 'application/json')

    return this.http.get<any>('https://us-central1-app-brigada-sos-1d19c.cloudfunctions.net/app/api/heridas');

    // return this.http.get<any>('http://localhost:5000/app-brigada-sos-1d19c/us-central1/app/api/heridas', {
    //   headers: header
    // });
  }

  getImagenesQuemadura(){
    
    return this.http.get<any>('https://us-central1-app-brigada-sos-1d19c.cloudfunctions.net/app/api/quemadura');
  }

  getImagenesHematoma(){
    return this.http.get<any>('https://us-central1-app-brigada-sos-1d19c.cloudfunctions.net/app/api/hematoma');
  }

  getImagenesSangrado(){
    return this.http.get<any>('https://us-central1-app-brigada-sos-1d19c.cloudfunctions.net/app/api/sangrado');
  }

  // private col<T>(ref: CollentionPredicate<T>, queryFn?): AngularFirestoreCollection{
  //   return typeof ref === "string"? this.afs.collection(ref, queryFn): ref;
  // }

  // col$<T>(ref: CollentionPredicate<T>, queryFn?): Observable<T[]>{
  //   return this.col(ref, queryFn).snapshotChanges().pipe(
  //     map(docs =>{
  //       return docs.map(d => d.payload.doc.data()) as T[]
  //     })
  //   )
  // }


}
