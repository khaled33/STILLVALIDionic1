import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ContratMarquePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-produit-marque',
  templateUrl: 'produit-marque.html',
})
export class ProduitMarquePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContratMarquePage');
  }
  Previous(){
    this.navCtrl.pop()
  }
  Next(){
    this.navCtrl.push('AjouterArticlePage')
  }
}
