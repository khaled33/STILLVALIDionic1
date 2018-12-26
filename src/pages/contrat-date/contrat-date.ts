import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContratDatePage');
  }

  AddPic(){
    this.navCtrl.push('AjouterContratPage')
  }
  Previous(){
    this.navCtrl.pop()
  }
}
