import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, PopoverController } from 'ionic-angular';

/**
 * Generated class for the DetailContratPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detail-contrat',
  templateUrl: 'detail-contrat.html',
})
export class DetailContratPage {
  contratID:any;
  decheance:any;
  photo:any;
  type:any;
  days:any;
  constructor(public popoverCtrl:PopoverController,public navCtrl: NavController, public navParams: NavParams, public modalCtrl:ModalController) {
  }
  presentMenu(myEvent) {
    console.log(myEvent);
    let popover = this.popoverCtrl.create('PopOverPage',  {contratID:this.contratID,decheance:this.decheance,photoC:this.photo,type:this.type} );
    popover.present({
      ev: myEvent
    });
  }
  async getNavParamsData() {
    if (this.navParams.get('contratID')) {
      this.contratID = this.navParams.get('contratID');
    
     console.log(this.contratID)
    }
    
    if (this.navParams.get('decheance')) {
      this.decheance = this.navParams.get('decheance');
    

    }
  
    if (this.navParams.get('photo')) {
      this.photo = this.navParams.get('photo');
    
    }
    if (this.navParams.get('type')) {
      this.type = this.navParams.get('type');
    
    }
    if (this.navParams.get('days')) {
      this.days = this.navParams.get('days');
    
    }
   

  }
  ionViewDidLoad() {
    this.getNavParamsData()
    console.log('ionViewDidLoad DetailContratPage');
  }
  GoToPhotos(){
    const modal = this.modalCtrl.create('ContratImagesPage', { id: this.contratID });
    modal.present();  }

    pop(){
      this.navCtrl.setRoot('MesProduitsPage');
    }
   
}
