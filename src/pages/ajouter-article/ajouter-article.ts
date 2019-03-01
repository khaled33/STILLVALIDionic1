import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { FormGroup, FormBuilder,Validators } from '@angular/forms';
import { SpeechRecognition } from '@ionic-native/speech-recognition';
import { Observable } from 'rxjs/Observable';
import { ChangeDetectorRef } from '@angular/core';
/**
 * Generated class for the AjouterArticlePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ajouter-article',
  templateUrl: 'ajouter-article.html',
})
export class AjouterArticlePage {
  nomForm:FormGroup;
  nom:any;
sav:any;
libelle:any;

matches: String[];
isRecording = false;
  constructor(public navCtrl: NavController, public navParams: NavParams, public formBuilder:FormBuilder, private speechRecognition: SpeechRecognition, private plt: Platform, private cd: ChangeDetectorRef) {
    this.nomForm = this.formBuilder.group({
      nom: ['', [Validators.required, Validators.minLength(3)]]
    });

    this.sav=localStorage.getItem("sav")
    this.libelle=localStorage.getItem("libelle")
    console.log(this.sav,this.libelle)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AjouterArticlePage');
  }
  Previous(){
    this.navCtrl.setRoot('ProduitMarquePage')
  }
  Next(){
    this.navCtrl.setRoot('ProduitDatePage')
  }
  valider(){
    this.navCtrl.setRoot('ProduitDatePage')
    localStorage.setItem("nom",this.nom)
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
      this.nom=matches[0]
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
  
