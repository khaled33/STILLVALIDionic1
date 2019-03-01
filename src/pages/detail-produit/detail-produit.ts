import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController, ModalController, AlertController } from 'ionic-angular';
import { ArticleProvider } from './../../providers/article/article';
/**
 * Generated class for the DetailProduitPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detail-produit',
  templateUrl: 'detail-produit.html',
})
export class DetailProduitPage {
produit:any;
id:any;
prodID:any;
enseigne:any;
marque:any;
nom:any;
dachat:any;
garantie:any;
photo:any;
facture:any;
dfin:any;
sav:any;
days:any;
  constructor(public alertCtrl: AlertController,public popoverCtrl:PopoverController,public articleService:ArticleProvider,public navCtrl: NavController,public modalCtrl: ModalController, public navParams: NavParams) {

 
  }
  presentMenu(myEvent,id,enseigne,marque,nom,dachat,garantie,photo,facture,dfin,sav) {
    console.log(myEvent);
    let popover = this.popoverCtrl.create('PopOverPage',  { id: id,enseigne: enseigne,marque: marque,nom: nom,dachat: dachat,garantie: garantie,photo: photo,facture: facture,dfin: dfin,sav: sav} );
    popover.present({
      ev: myEvent
    });
  }
  async getNavParamsData() {
    if (this.navParams.get('articleID')) {
      this.prodID = this.navParams.get('articleID');
    
     console.log(this.prodID)
    }
    if (this.navParams.get('enseigne')) {
      this.enseigne = this.navParams.get('enseigne');
    
    }
    if (this.navParams.get('marque')) {
      this.marque = this.navParams.get('marque');
    
    }
    if (this.navParams.get('nom')) {
      this.nom = this.navParams.get('nom');
    
   
    }
    if (this.navParams.get('dachat')) {
      this.dachat = this.navParams.get('dachat');
    

    }
    if (this.navParams.get('garantie')) {
      this.garantie = this.navParams.get('garantie');
    
    }
    if (this.navParams.get('photo')) {
      this.photo = this.navParams.get('photo');
    
    }
    if (this.navParams.get('facture')) {
      this.facture = this.navParams.get('facture');
    
    }
    if (this.navParams.get('dfin')) {
      this.dfin = this.navParams.get('dfin');
    
    }
    if (this.navParams.get('sav')) {
      this.sav = this.navParams.get('sav');
    
    }
    if (this.navParams.get('days')) {
      this.days = this.navParams.get('days');
    console.log(this.days)
    }

  }
  ionViewDidLoad() {
    this.getNavParamsData()
    console.log('ionViewDidLoad DetailProduitPage');
  }
  Pic(pic){
    const modal = this.modalCtrl.create('FacturePicPage', { pic: pic });
    modal.present();
    
  }
  DeposerAnnonce(){
    this.navCtrl.setRoot('DeposerAnnoncePage' , { photo: this.photo})
  }
  pop(){
    this.navCtrl.setRoot('MesProduitsPage');
  }
}
