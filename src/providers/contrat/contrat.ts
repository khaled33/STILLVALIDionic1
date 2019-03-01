import { Injectable } from '@angular/core';
import {apiurl} from   '../../app/api.js';
import { Http , Headers} from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the ContratProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ContratProvider {

  constructor(public  http: Http) {
    console.log('Hello ContratProvider Provider');
  }
  getTypes(){
    return new Promise((resolve, reject) => {
   

       let headers = new Headers();
       headers.append('Content-Type', 'application/json');
      
     
       this.http.get("http://13.80.41.22/stillvalid/StillValid/web/app_dev.php/Types", {headers: headers})
         .map(res => res.json())
         .subscribe(data => {
        
  
           resolve(data);
           console.log(data);
         }, (err) => {
           reject(err);
         }); 
    

   });

 }
 AddContact(contact){

  return new Promise((resolve, reject) =>{
      let headers = new Headers();
      headers.append('content-type', 'application/json');
      this.http.post(apiurl+'Contrats', JSON.stringify(contact), {headers: headers}).
      subscribe(res =>{
        resolve(res.json());
        
      }, (err) =>{
      reject(err);
  });
  
  });
  
}
AddPaper(paper){

  return new Promise((resolve, reject) =>{
      let headers = new Headers();
      headers.append('content-type', 'application/json');
      this.http.post(apiurl+'Papier', JSON.stringify(paper), {headers: headers}).
      subscribe(res =>{
        resolve(res.json());
      }, (err) =>{
      reject(err);
  });
  
  });
  
}

ModifPaper(paper,id){

  return new Promise((resolve, reject) =>{
      let headers = new Headers();
      headers.append('content-type', 'application/json');
      this.http.put(apiurl+'Papiers/'+id, JSON.stringify(paper), {headers: headers}).
      subscribe(res =>{
        resolve(res.json());
      }, (err) =>{
      reject(err);
  });
  
  });
  
}
GetUserContrat(id){

  return new Promise((resolve, reject) => {
   

    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
   

    this.http.get(apiurl+"Contrats/"+id, {headers: headers})
      .map(res => res.json())
      .subscribe(data => {
     

        resolve(data);
        console.log(data);
      }, (err) => {
        reject(err);
      }); 
 

});
}
GetPhotos(id){

  return new Promise((resolve, reject) => {
   

    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
   

    this.http.get(apiurl+"Papiers/"+id, {headers: headers})
      .map(res => res.json())
      .subscribe(data => {
     

        resolve(data);
        console.log(data);
      }, (err) => {
        reject(err);
      }); 
 

});
}

GetArticleByArticleID(id){
    return new Promise((resolve, reject) => {
   

  let headers = new Headers();
  headers.append('Content-Type', 'application/json');

  this.http.get(apiurl+"Contrat/"+id, {headers: headers})
    .map(res => res.json())
    .subscribe(data => {
   

      resolve(data);
      console.log(data);
    }, (err) => {
      reject(err);
    }); 


});}


ModifContrat(Contrat,id){

  return new Promise((resolve, reject) =>{
      let headers = new Headers();
      headers.append('content-type', 'application/json');
      this.http.put(apiurl+'Contrats/'+id, JSON.stringify(Contrat), {headers: headers}).
      subscribe(res =>{
        resolve(res.json());
      }, (err) =>{
      reject(err);
  });
  
  });
  
}
DeleteContrat(id){

  return new Promise((resolve, reject) =>{
      let headers = new Headers();
      headers.append('content-type', 'application/json');
      this.http.delete(apiurl+'Contrats/'+id, {headers: headers}).
      subscribe(res =>{
        resolve(res.json());
      }, (err) =>{
      reject(err);
  });
  
  });
  
}
}
