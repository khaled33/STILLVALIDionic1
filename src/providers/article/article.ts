
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
export class ArticleProvider {

  constructor( public http: Http) {
    console.log('Hello ArticleProvider Provider');
  }
  addArticle(article){

    return new Promise((resolve, reject) =>{
        let headers = new Headers();
        headers.append('content-type', 'application/json');
        this.http.post(apiurl+'Articles', JSON.stringify(article), {headers: headers}).
        subscribe(res =>{
          resolve(res.json());
        }, (err) =>{
        reject(err);
    });
    
    });
    
}
ModifArticle(article,id){

  return new Promise((resolve, reject) =>{
      let headers = new Headers();
      headers.append('content-type', 'application/json');
      this.http.put(apiurl+'Articles/'+id, JSON.stringify(article), {headers: headers}).
      subscribe(res =>{
        resolve(res.json());
      }, (err) =>{
      reject(err);
  });
  
  });
  
}
DeleteArticle(id){

  return new Promise((resolve, reject) =>{
      let headers = new Headers();
      headers.append('content-type', 'application/json');
      this.http.delete(apiurl+'Articles/'+id, {headers: headers}).
      subscribe(res =>{
        resolve(res.json());
      }, (err) =>{
      reject(err);
  });
  
  });
  
}
GetUserArticle(id){

  return new Promise((resolve, reject) => {
   

    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
   

    this.http.get(apiurl+"Articles/"+id, {headers: headers})
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
 

  this.http.get(apiurl+"ArticlesP/"+id, {headers: headers})
    .map(res => res.json())
    .subscribe(data => {
   

      resolve(data);
      console.log(data);
    }, (err) => {
      reject(err);
    }); 


});}

TestMail(mail){

  return new Promise((resolve, reject) =>{
      let headers = new Headers();
      headers.append('content-type', 'application/json');

      this.http.get("http://13.80.41.22/WebServicePhp/Notifications/sendMail/sendMail.php?email=hamzamlayeh@outlook.com", {headers: headers})
      .map(res => res.json())
    .subscribe(data => {
   

      resolve(data);
      console.log(data);
    }, (err) => {
      reject(err);
    }); 


});}


}


