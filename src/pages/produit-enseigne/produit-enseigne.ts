import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { FormGroup, FormBuilder,Validators } from '@angular/forms';
import { SpeechRecognition } from '@ionic-native/speech-recognition';
import { Observable } from 'rxjs/Observable';
import { ChangeDetectorRef } from '@angular/core';
/**
 * Generated class for the ContratEnseignePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-produit-enseigne',
  templateUrl: 'produit-enseigne.html',
})
export class ProduitEnseignePage {
  enseigneForm:FormGroup;
  enseigne:any;
  matches: String[];
  isRecording = false;
  constructor(public navCtrl: NavController, public navParams: NavParams, public formBuilder:FormBuilder, private speechRecognition: SpeechRecognition, private plt: Platform, private cd: ChangeDetectorRef) {

    this.enseigneForm = this.formBuilder.group({
      enseigne: ['', [Validators.required, Validators.minLength(3)]]
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContratEnseignePage');
  }
Previous(){
  this.navCtrl.setRoot('ProduitPage')
}
Next(){
  this.navCtrl.setRoot('ProduitMarquePage')
  localStorage.setItem("enseigne",this.enseigne)
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
    this.enseigne=matches[0]
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
