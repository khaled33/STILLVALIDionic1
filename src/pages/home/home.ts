
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SpeechRecognition } from '@ionic-native/speech-recognition';
import { ArticleProvider } from './../../providers/article/article';
/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
id;
isLogin;
text;
data:any
date:any;

  constructor(public navCtrl: NavController, public navParams: NavParams ,private speechRecognition: SpeechRecognition,private articleProvider:ArticleProvider) {
this.isLogin=localStorage.getItem('isLogin');
this.date=new Date().getFullYear()
this.id=localStorage.getItem('id');
console.log(this.id,this.isLogin)
  }

  ngOnInit() {

   

  }


 

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

  GoToProd(){
    this.navCtrl.setRoot('MesProduitsPage')
  }
  Boutique(){
    this.navCtrl.setRoot('BoutiquePage')
  }
  AddProd(){
    this.navCtrl.setRoot('ProduitPage')
  }
  GoToStore(){
    this.navCtrl.setRoot('MesProduitsPage')
  }

  UploadContrat(){
   
    let  email:"yassinzaghdoudi@gmail.com"
    
  
 
    this.articleProvider.TestMail(email).then((result) => {
     
      this.data=result;
      console.log(this.data);
  
  }, (err) => {
  
      console.log(err)
     
  });
  }
}
