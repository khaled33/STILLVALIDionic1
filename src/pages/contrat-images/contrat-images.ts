import { ContratProvider } from './../../providers/contrat/contrat';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ModalController } from 'ionic-angular';

/**
 * Generated class for the ContratImagesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contrat-images',
  templateUrl: 'contrat-images.html',
})
export class ContratImagesPage {
id:any
photos:any;
  constructor(public paperservice:ContratProvider, public modalCtrl:ModalController ,public viewctrl: ViewController,public navCtrl: NavController, public navParams: NavParams) {

  
  }
  ionViewDidLoad() {
    this.getNavParamsData()
    console.log('ionViewDidLoad FacturePicPage');
  }
  Dimiss(){
    this.viewctrl.dismiss()
  }
  async getNavParamsData() {
    if (this.navParams.get('id')) {
      this.id = this.navParams.get('id');
      
      this.paperservice.GetPhotos(this.id).then(res=>{
        this.photos=res;
            })
     
    }
  }

  GoToPhoto(pic){
    const modal = this.modalCtrl.create('ContratImagePage', { pic: pic });
    modal.present();  }
}

  

