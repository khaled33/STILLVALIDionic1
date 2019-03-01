import { ContratProvider } from './../../providers/contrat/contrat';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, LoadingController } from 'ionic-angular';

/**
 * Generated class for the VoirContratPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-voir-contrat',
  templateUrl: 'voir-contrat.html',
})
export class VoirContratPage {
  contratID:any;
  decheance:any;
  photoC:any;
  type:any;
  id:any;
  cont:any
  constructor( public modalCtrl:ModalController,public navCtrl: NavController, public navParams: NavParams, public loadingCtrl:LoadingController,private contratProvider:ContratProvider) {
 
    this.contratProvider.getTypes().then(res=>{
      this.cont=res;
    
    });
  }

  ionViewDidLoad() {
    this.getNavParamsData()
    console.log('ionViewDidLoad VoirContratPage');
  }
  async getNavParamsData() {
    this.id=localStorage.getItem("id")
    if (this.navParams.get('id')) {
      this.contratID = this.navParams.get('id');
    console.log(this.contratID)
     
    }
    if (this.navParams.get('decheance')) {
      this.decheance = this.navParams.get('decheance');
    
    }
    if (this.navParams.get('photoC')) {
      this.photoC = this.navParams.get('photoC');
    
    }
    if (this.navParams.get('type')) {
      this.type = this.navParams.get('type');
 
    }}
    goToModif(){
      const modal = this.modalCtrl.create('ModifContratImagesPage', { id: this.contratID });
      modal.present(); 
    }

    ModifContrat(){
      let Contrat={
        type:this.type,
        decheance:this.decheance,
        photo:this.photoC,
        user_id: this.id,
       
    };
      this.contratProvider.ModifContrat(Contrat,this.contratID).then((result) => {
        console.log(result);
        
    }, (err) => {
    
        console.log(err)
       
    });

    }
}
