import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the FacturePicPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-facture-pic',
  templateUrl: 'facture-pic.html',
})
export class FacturePicPage {
pic:any;
  constructor(public viewctrl: ViewController,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.getNavParamsData()
    console.log('ionViewDidLoad FacturePicPage');
  }
  Dimiss(){
    this.viewctrl.dismiss()
  }
  async getNavParamsData() {
    if (this.navParams.get('pic')) {
      this.pic = this.navParams.get('pic');
    
     
    }
  }
}
