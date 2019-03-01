import { AnoonceProvider } from './../../providers/anoonce/anoonce';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AbstractControl } from '@angular/forms';
import { MarquesProvider } from './../../providers/marques/marques';
/**
 * Generated class for the ModifAnnoncePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modif-annonce',
  templateUrl: 'modif-annonce.html',
})
export class ModifAnnoncePage {
  data:any;
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

    constructor(public loadingCtrl: AlertController,public annonceService:AnoonceProvider,public Services:MarquesProvider,public navCtrl: NavController, public navParams: NavParams) {
      this.Services.getCat().then(res=>{
        this.data=res;
       
        console.log(this.data)
       
      });
    }
  
    ionViewDidLoad() {
      this.getNavParamsData()
      console.log('ionViewDidLoad BoutiqueDetailPage');
    }
    async getNavParamsData() {

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
    static mustBeTruthy(c: AbstractControl): { [key: string]: boolean } {
      let rv: { [key: string]: boolean } = {};
      if (!c.value) {
        rv['notChecked'] = true;
      }
      return rv;
    }
    ModifAnnonce(){
      let annonce={
        titre:this.titre,
        photoproduit:this.photoproduit,
        description:this.description,
        prix:this.prix,
        ville:this.ville,
        categorie:this.categorie,
        contact:"",
        numtel:this.numtel,
        email:this.email,
        user_id:this.user_id
       
    };
    const loading = this.loadingCtrl.create();
    loading.present();
      this.annonceService.ModifAnnoce(annonce,this.idAnnonce).then((result) => {
        loading.dismiss();
        this.navCtrl.push('BoutiquePage')
        console.log(result);
        
    }, (err) => {
    
        console.log(err)
       
    });

    }
  }