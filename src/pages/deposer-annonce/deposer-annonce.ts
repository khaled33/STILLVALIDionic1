import { AnoonceProvider } from './../../providers/anoonce/anoonce';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { AbstractControl } from '@angular/forms';
import { MarquesProvider } from './../../providers/marques/marques';

/**
 * Generated class for the DeposerAnnoncePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-deposer-annonce',
  templateUrl: 'deposer-annonce.html',
})
export class DeposerAnnoncePage {
data:any;
titre:any;
photoproduit:any;
desc:any;
photo:any;
MyEmail:any;
uid:any;
  prix:any;
  ville:any;
  categori:any;

  tel:any;
  isChecked:boolean;
  constructor(public annonceService:AnoonceProvider, public loadingCtrl:LoadingController,public Services:MarquesProvider,public navCtrl: NavController, public navParams: NavParams) {
    this.Services.getCat().then(res=>{
      this.data=res;
     
      console.log(this.data)
     
    });
  }

  ionViewDidLoad() {
    this.getNavParamsData()
    this.MyEmail=localStorage.getItem("MyEmail")
    this.uid=localStorage.getItem("id")
    console.log('ionViewDidLoad DeposerAnnoncePage');
  }
  static mustBeTruthy(c: AbstractControl): { [key: string]: boolean } {
    let rv: { [key: string]: boolean } = {};
    if (!c.value) {
      rv['notChecked'] = true;
    }
    return rv;
  }

  async getNavParamsData() {
    if (this.navParams.get('photo')) {
      this.photo = this.navParams.get('photo');
    }
  }
  UploadAnnonce(){
    let annonce={
      titre:this.titre,
    photoproduit:this.photo,
      description:this.desc,
      prix:this.prix,
      ville:this.ville,
      categorie:this.categori,
      contact:"",
      numtel:this.tel,
      email:this.MyEmail,
      user_id:this.uid
  };
  const loading = this.loadingCtrl.create();
  loading.present();
    this.annonceService.addAnnonce(annonce).then((result) => {
      console.log(result);
      loading.dismiss();
      this.navCtrl.push('BoutiquePage')
  }, (err) => {
  
      console.log(err)
     
  });
  }

  email(){
    this.isChecked=!this.isChecked
  }
}
