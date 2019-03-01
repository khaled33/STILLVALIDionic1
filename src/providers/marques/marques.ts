import { Injectable } from '@angular/core';
import {apiurl} from   '../../app/api.js';
import { Http , Headers} from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the MarquesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MarquesProvider {

  constructor( public http: Http) {
    console.log('Hello MarquesProvider Provider');
  }
  getMarques(){
    return new Promise((resolve, reject) => {
   

       let headers = new Headers();
       headers.append('Content-Type', 'application/json');
      
     
       this.http.get("http://13.80.41.22/stillvalid/StillValid/web/app_dev.php/Marques", {headers: headers})
         .map(res => res.json())
         .subscribe(data => {
        
  
           resolve(data);
           console.log(data);
         }, (err) => {
           reject(err);
         }); 
    

   });

 }
 getCat(){
  return new Promise((resolve, reject) => {
 

     let headers = new Headers();
     headers.append('Content-Type', 'application/json');
    
   
     this.http.get("http://13.80.41.22/stillvalid/StillValid/web/app_dev.php/Categories", {headers: headers})
       .map(res => res.json())
       .subscribe(data => {
      

         resolve(data);
         console.log(data);
       }, (err) => {
         reject(err);
       }); 
  

 });

}
}
