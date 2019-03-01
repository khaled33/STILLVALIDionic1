import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { FormGroup, FormBuilder,Validators } from '@angular/forms';
import { SpeechRecognition } from '@ionic-native/speech-recognition';
import { Observable } from 'rxjs/Observable';
import { ChangeDetectorRef } from '@angular/core';
/**
 * Generated class for the ProduitGarantiePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-produit-garantie',
  templateUrl: 'produit-garantie.html',
})
export class ProduitGarantiePage {
  garantieForm:FormGroup;
  garantie:any;
  date:any;
  matches: String[];
  isRecording = false;
  constructor(public navCtrl: NavController, public navParams: NavParams, public formBuilder:FormBuilder, private speechRecognition: SpeechRecognition, private plt: Platform, private cd: ChangeDetectorRef) {
    let emailRegex =/^(?![.])\d+(?![.])/;  
   
    this.garantieForm = this.formBuilder.group({
      garantie: ['', Validators.compose([Validators.required, Validators.pattern(emailRegex)])],
    });

  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProduitGarantiePage');
  }
Previous(){
  this.navCtrl.setRoot('ProduitDatePage');
}
Next(){
  this.navCtrl.push('AjouterProduitPage')
  localStorage.setItem("garantie",this.garantie)
}
startListening() {
  this.speechRecognition.hasPermission()
  .then((hasPermission: boolean) => {
    if (!hasPermission) {
      this.speechRecognition.requestPermission();
    }
  });
  let options = {
    language: 'fr-FR'
  }
  this.speechRecognition.startListening(options).subscribe(matches => {
    this.matches = matches;
    this.garantie=matches[0]
    this.cd.detectChanges();
  });
  this.isRecording = true;
}
stopListening() {
  this.speechRecognition.stopListening().then(() => {
    this.isRecording = false;
  });
}

}
