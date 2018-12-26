import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AjouterArticlePage');
  }
  Previous(){
    this.navCtrl.pop()
  }
  valider(){
    this.navCtrl.push('ProduitDatePage')
  }
}
