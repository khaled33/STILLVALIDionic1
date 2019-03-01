import { UserProvider } from './../../providers/user/user';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { FormGroup, FormBuilder,Validators } from '@angular/forms';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
data:any;
email:any;
eMailExist:any;
password:any;
passwordExist:any;
Users:any;
isExist:boolean;
id:any;
signinForm: FormGroup;
  constructor(public alertCtrl:AlertController, public formBuilder: FormBuilder,public loadingCtrl:LoadingController, public userService:UserProvider,public navCtrl: NavController, public navParams: NavParams) {
    let emailRegex = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;    

    this.signinForm = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.pattern(emailRegex)])],
      password: ['', [Validators.required, Validators.minLength(1)]]
    });

  
  }
  errorFunc(message){
    let alert = this.alertCtrl.create({
      title: 'Erreur!',
      subTitle: message,
      buttons: ['OK']
    });
    alert.present();
  }
  ionViewDidLoad() {
    setTimeout(() =>{
      console.log(this.data)
    },10000)
    console.log('ionViewDidLoad LoginPage');
  }


 register(){
  this.navCtrl.setRoot('InscriptionPage')
  }
  login(){
 
   
          let loader = this.loadingCtrl.create({
            content: 'veuillez patienter'
        });
        loader.present();

        this.userService.getUsers().then(res=>{
          this.Users=res;
          console.log(res)
          for (let us of this.Users ) {
              
            this.eMailExist=us.email;
            this.passwordExist=us.password;
            console.log(this.eMailExist); 
            if (this.eMailExist == this.email && this.passwordExist == this.password){
                this.isExist=true;
                this.id=us.id;
                localStorage.setItem("id",us.id);
                localStorage.setItem("MyEmail",us.email);
                
                break;
            }else{
             this.isExist=false;
            }
            
        }

        if(this.isExist==true){
          this.navCtrl.setRoot('HomePage');
          localStorage.setItem("isLogin", "true");
         loader.dismiss();
        }else{
          this. errorFunc('Email ou mot de passe incorrect')
          loader.dismiss();
        }
          console.log(this.Users)
         
        })
 
          
       
    
    }
  
}
