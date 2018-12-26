import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContratEnseignePage');
  }
Previous(){
  this.navCtrl.pop()
}
Next(){
  this.navCtrl.push('ProduitMarquePage')
}
}
