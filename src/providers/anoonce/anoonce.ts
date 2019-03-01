
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Camera } from '@ionic-native/camera';
import {apiurl} from   '../../app/api.js';

import { Http , Headers } from '@angular/http';

/*
  Generated class for the ArticleProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AnoonceProvider {

  constructor( public http: Http) {
    console.log('Hello ArticleProvider Provider');
  }
  addAnnonce(annonce){

    return new Promise((resolve, reject) =>{
        let headers = new Headers();
        headers.append('content-type', 'application/json');
        this.http.post(apiurl+'Annonces', JSON.stringify(annonce), {headers: headers}).
        subscribe(res =>{
          resolve(res.json());
        }, (err) =>{
        reject(err);
    });
    
    });
    
}
GetAnnonce(){

  return new Promise((resolve, reject) => {
   

    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
   

    this.http.get(apiurl+"Annonces", {headers: headers})
      .map(res => res.json())
      .subscribe(data => {
     

        resolve(data);
        console.log(data);
      }, (err) => {
        reject(err);
      }); 
 

});


}
DeleteAnnonce(id){

  return new Promise((resolve, reject) =>{
      let headers = new Headers();
      headers.append('content-type', 'application/json');
      this.http.delete(apiurl+'Annonces/'+id, {headers: headers}).
      subscribe(res =>{
        resolve(res.json());
      }, (err) =>{
      reject(err);
  });
  
  });
  
}

ModifAnnoce(annonce,id){

  return new Promise((resolve, reject) =>{
      let headers = new Headers();
      headers.append('content-type', 'application/json');
      this.http.put(apiurl+'Annonces/'+id, JSON.stringify(annonce), {headers: headers}).
      subscribe(res =>{
        resolve(res.json());
      }, (err) =>{
      reject(err);
  });
  
  });
  
}

}