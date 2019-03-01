import { UserProvider } from './../../providers/user/user';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { FormGroup, FormBuilder,Validators } from '@angular/forms';

/**
 * Generated class for the InscriptionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-inscription',
  templateUrl: 'inscription.html',
})
export class InscriptionPage {
email:any;
eMailExist:any;
password:any;
Repassword:any;
Users:any;
signupForm:FormGroup;
id:any;
  constructor(public alertCtrl:AlertController, public formBuilder:FormBuilder, public loadingCtrl:LoadingController,public userService:UserProvider,public navCtrl: NavController, public navParams: NavParams) {
    let emailRegex = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;    

    this.signupForm = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.pattern(emailRegex)])],
      password: ['', [Validators.required, Validators.minLength(6)]],
      Repassword:['', [Validators.required, Validators.minLength(6)]]
    });
   
   this.id=localStorage.getItem("id");
   console.log(this.id)

   
    this.userService.getUsers().then(res=>{
      this.Users=res;
      for (let us of this.Users ) {
          
        this.eMailExist=us.email;
        console.log(this.eMailExist); 
       
        
    }
      console.log(this.Users)
     
    })
  }

  ionViewDidLoad() {
    console.log(this.eMailExist); 
    console.log('ionViewDidLoad InscriptionPage');
  }
  errorFunc(message){
    let alert = this.alertCtrl.create({
      title: 'Erreur!',
      subTitle: message,
      buttons: ['OK']
    });
    alert.present();
  }
  Register(){
 
    let credentials = {
      email:this.email,
      password:this.password,
      code: "",
      regId: "",
      created: "",
      modified: "",
      etat:"",
      admin: ""
          };
        



        if(this.password !== this.Repassword) {
          
          this. errorFunc('les deux mots de passe ne sont pas identiques')
          this.password = '';
          this.Repassword = '';
          
          return;
        }else{
          let loader = this.loadingCtrl.create({
            content: 'Please wait'
        });
        loader.present();
      if (this.eMailExist == this.email){
   
        loader.dismiss();
      }else{
        this.userService.Register(credentials).then((result) => {

          console.log(result);
          this.navCtrl.setRoot('HomePage');
          loader.dismiss();
          localStorage.setItem("isLogin", "true");
         
         
         

          
         
      }, (err) => {
   
          console.log(err);
          loader.dismiss();
        
          console.log("credentials: "+JSON.stringify(credentials))
          
      });
      }
          
       
    
    }
  }
}
