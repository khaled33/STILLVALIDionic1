import { AnoonceProvider } from './../../providers/anoonce/anoonce';
import { ContratProvider } from './../../providers/contrat/contrat';
import { ArticleProvider } from './../../providers/article/article';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-pop-over',
  templateUrl: 'pop-over.html',
})
export class PopOverPage {
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


contratID:any;
  decheance:any;
  photoC:any;
  type:any;





  categorie:any;
  description:any;
  email:any;
  numtel:any;
  photoproduit:any;
  prix:any;
  titre:any;
  user_id:any;
  ville:any;
  idAnnonce:any;
  constructor(public loadingCtrl: AlertController,public alertCtrl: AlertController,public AnnonceService:AnoonceProvider,public ContratService:ContratProvider,public service:ArticleProvider,public navCtrl: NavController, public navParams: NavParams) {
    
  }




  showConfirm(title,messsage) {
    const confirm = this.alertCtrl.create({

      title: 'Supprimer',
      message: 'Vous été sûr de supprimer?',
      buttons: [
        {
          text: 'NON',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'OUI',
          handler: () => {
           this. Supprimer()
          }
        }
      ]
    });
    confirm.present();
  }

  async getNavParamsData() {
    if (this.navParams.get('id')) {
      this.prodID = this.navParams.get('id');
    
     
    }
    if (this.navParams.get('contratID')) {
      this.contratID = this.navParams.get('contratID');
    
     
    }
    if (this.navParams.get('decheance')) {
      this.decheance = this.navParams.get('decheance');
    
     
    }
    if (this.navParams.get('photoC')) {
      this.photoC = this.navParams.get('photoC');
    
     
    }
    if (this.navParams.get('type')) {
      this.type = this.navParams.get('type');
    
     
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








    if (this.navParams.get('categorie')) {
      this.categorie = this.navParams.get('categorie');
    
     
    }
    if (this.navParams.get('idAnnonce')) {
      this.idAnnonce = this.navParams.get('idAnnonce');
    
    }
    if (this.navParams.get('email')) {
      this.email = this.navParams.get('email');
    
    }
    if (this.navParams.get('description')) {
      this.description = this.navParams.get('description');
    
   
    }
    if (this.navParams.get('numtel')) {
      this.numtel = this.navParams.get('numtel');
    

    }
    if (this.navParams.get('photoproduit')) {
      this.photoproduit = this.navParams.get('photoproduit');
    
    }
    if (this.navParams.get('prix')) {
      this.prix = this.navParams.get('prix');
    
    }
    if (this.navParams.get('titre')) {
      this.titre = this.navParams.get('titre');
    
    }
  
    if (this.navParams.get('user_id')) {
      this.user_id = this.navParams.get('user_id');
    
    }
    if (this.navParams.get('ville')) {
      this.ville = this.navParams.get('ville');
    
    }
   
  }
  ionViewDidLoad() {
    this.getNavParamsData()
    console.log('ionViewDidLoad PopOverPage');
  }
  Modifier(){
    if (this.prodID){
      this.navCtrl.push('VoirProduitPage', { id: this.prodID,enseigne: this.enseigne,marque: this.marque,nom: this.nom,dachat: this.dachat,garantie: this.garantie,photo: this.photo,facture:this.facture,dfin:this.dfin,sav:this.sav})
    }else if (this.contratID){
      this.navCtrl.push('VoirContratPage', { id: this.contratID,decheance: this.decheance,photoC: this.photoC,type: this.type})
    }else if (this.idAnnonce){
      this.navCtrl.push('ModifAnnoncePage', { idAnnonce:this.idAnnonce,categorie:this.categorie,description:this.description,email:this.email,numtel:this.numtel,photoproduit:this.photoproduit,prix:this.prix,titre:this.titre,ville:this.ville,user_id:this.user_id})
    }
    
  }
  Supprimer(){


    if (this.prodID){
      const loading = this.loadingCtrl.create();
      loading.present();
      this.service.DeleteArticle(this.prodID).then(res=>{
        loading.dismiss();
        this.navCtrl.push('MesProduitsPage')
      })
    }else if (this.contratID){
      const loading = this.loadingCtrl.create();
      loading.present();
      this.ContratService.DeleteContrat(this.contratID).then(res=>{
        loading.dismiss();
        this.navCtrl.push('MesProduitsPage')
      })
    }else if (this.idAnnonce){
      const loading = this.loadingCtrl.create();
      loading.present();
      this.AnnonceService.DeleteAnnonce(this.idAnnonce).then(res=>{
        loading.dismiss();
        this.navCtrl.push('BoutiquePage')
      })
    }

  }
}
