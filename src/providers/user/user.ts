import { Injectable } from '@angular/core';
import {apiurl} from   '../../app/api.js';
import { Http , Headers} from '@angular/http';
import 'rxjs/add/operator/map';
/*
  Generated class for the UserProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserProvider {

  constructor(public  http: Http) {
    console.log('Hello UserProvider Provider');
  }
  getUsers(){
    return new Promise((resolve, reject) => {
   

       let headers = new Headers();
       headers.append('Content-Type', 'application/json');
      
     
       this.http.get( apiurl+"Users", {headers: headers})
         .map(res => res.json())
         .subscribe(data => {
        
  
           resolve(data);
           console.log(data);
         }, (err) => {
           reject(err);
         }); 
    

   });

 }


 Register(credentials){

  return new Promise((resolve, reject) => {
    let headers = new Headers();
    // headers.append('Content-Type', 'application/json');
  
   headers.append('Access-Control-Allow-Origin' , '*');
   headers.append('Access-Control-Allow-Methods', 'POST');
  
   headers.append('Accept','application/json');
 headers.append('content-type','application/json');
 
    this.http.post(apiurl+"Users", JSON.stringify(credentials), {headers: headers})
      .subscribe(res => {
        let data = res.json();
        
        localStorage.setItem("isLogin", "true");
        // localStorage.setItem("id", data.id.toString());
      resolve(data);
        
}, (err) => {
        reject(err);
      
      });  });

}
}