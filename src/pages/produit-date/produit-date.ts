import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProduitDatePage');
  }
Next(){
  this.navCtrl.push('ProduitGarantiePage')
}
Previous(){
  this.navCtrl.pop();
}
}
