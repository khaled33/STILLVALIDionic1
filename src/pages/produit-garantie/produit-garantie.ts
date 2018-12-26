import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProduitGarantiePage');
  }
Previous(){
  this.navCtrl.pop();
}
Next(){
  this.navCtrl.push('AjouterProduitPage')
}
}
