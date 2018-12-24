import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ContratTypePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contrat-type',
  templateUrl: 'contrat-type.html',
})
export class ContratTypePage {

  text:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.text='aaaa'
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContratTypePage');
  }

}
