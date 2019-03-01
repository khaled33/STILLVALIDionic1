import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { FormGroup, FormBuilder,Validators } from '@angular/forms';
import moment from 'moment';
import { SpeechRecognition } from '@ionic-native/speech-recognition';
import { Observable } from 'rxjs/Observable';
import { ChangeDetectorRef } from '@angular/core';
/**
 * Generated class for the ProduitDatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-produit-date',
  templateUrl: 'produit-date.html',
})
export class ProduitDatePage {
  dateForm:FormGroup;
  date:any;
  matches: String[];
  isRecording = false;
  constructor(public navCtrl: NavController, public navParams: NavParams, public formBuilder:FormBuilder, private speechRecognition: SpeechRecognition, private plt: Platform, private cd: ChangeDetectorRef) {
    this.dateForm = this.formBuilder.group({
      date: ['', [Validators.required]]
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProduitDatePage');
  }
Next(){
  this.navCtrl.setRoot('ProduitGarantiePage')
  localStorage.setItem("date",this.date)
}
Previous(){
  this.navCtrl.setRoot('AjouterArticlePage');
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
    this.date=matches[0]
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

