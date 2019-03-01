import { AnoonceProvider } from './../../providers/anoonce/anoonce';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, Loading, LoadingController } from 'ionic-angular';

/**
 * Generated class for the BoutiquePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-boutique',
  templateUrl: 'boutique.html',
})
export class BoutiquePage {
data:any;
id:any;
loading: Loading;
  constructor( public loadingCtrl:LoadingController,public modalCtrl:ModalController,public boutiqueService:AnoonceProvider,public navCtrl: NavController, public navParams: NavParams) {
  
    this.boutiqueService.GetAnnonce().then(res=>{
      this.data=res;
     
      console.log(this.data)
     
    });

    this.id=localStorage.getItem("id")
    console.log(this.id)
  }
  ngOnInit() {
 
    this.presentLoading();
   
  
   
  }
  GoToAnnonceDetail(id, categorie,description,email,numtel,photoproduit,prix,titre,user_id,ville){
    const modal = this.modalCtrl.create('BoutiqueDetailPage', { id: id,categorie:categorie,description:description,email:email,numtel:numtel,photoproduit:photoproduit,prix:prix,titre:titre,user_id:user_id,ville:ville });
    modal.present();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad BoutiquePage');
  }

  dismissLoading(){
    this.loading.dismiss();
}

presentLoading() {
  this.loading = this.loadingCtrl.create({
     content: 'Chargement en cours...'
  });
  this.loading.present();
}

}
