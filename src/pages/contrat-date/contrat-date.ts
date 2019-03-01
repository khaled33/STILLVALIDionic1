import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { FormGroup, FormBuilder,Validators } from '@angular/forms';
import moment from 'moment';
import { SpeechRecognition } from '@ionic-native/speech-recognition';
import { Observable } from 'rxjs/Observable';
import { ChangeDetectorRef } from '@angular/core';
/**
 * Generated class for the ContratDatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contrat-date',
  templateUrl: 'contrat-date.html',
})
export class ContratDatePage {
type:any;
dateForm:FormGroup;
date: string ;
matches: String[];
isRecording = false;
  constructor(public navCtrl: NavController, public navParams: NavParams, public formBuilder:FormBuilder, private speechRecognition: SpeechRecognition, private plt: Platform, private cd: ChangeDetectorRef) {
    this.type=localStorage.getItem('type')
    console.log(this.type)

    this.dateForm = this.formBuilder.group({
      date: ['', [Validators.required]]
    });

    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContratDatePage');
  }

  AddPic(){
    this.navCtrl.setRoot('AjouterContratPage')
    localStorage.setItem("dateC",this.date)
  }
  Previous(){
    this.navCtrl.setRoot('ContratTypePage')
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
  
