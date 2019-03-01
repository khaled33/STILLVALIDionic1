import { MarquesProvider } from './../../providers/marques/marques';
import { ArticleProvider } from './../../providers/article/article';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import moment from 'moment';
/**
 * Generated class for the RecapitulatifProduitPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-recapitulatif-produit',
  templateUrl: 'recapitulatif-produit.html',
})
export class RecapitulatifProduitPage {
  CantEditE:boolean;
  CantEditM:boolean;
  CantEditP:boolean;
  CantEditD:boolean;
  CantEditDu:boolean;
  CantEdit:boolean;
  enseigne:any;
  Marque:any;
  Produit:any;
  date:any;
  duree:any;
  ArticlePic: any;
  FacturePic:any;
  id:any;
  sav:any;
  data:any;
  DateFin: any ;
  constructor(public Services:MarquesProvider,public navCtrl: NavController, public loadingCtrl:LoadingController,public navParams: NavParams,private articleProvider:ArticleProvider) {
    this.enseigne=localStorage.getItem("enseigne")
    console.log(this.enseigne)
    this.Marque=localStorage.getItem("libelle")
    console.log(this.Marque)
    this.Produit=localStorage.getItem("nom")
    console.log(this.Produit)
    this.date=localStorage.getItem("date")
    console.log(this.date)
    this.duree=localStorage.getItem("garantie")
    console.log(this.duree)

    this.Services.getMarques().then(res=>{
      this.data=res;
     
      console.log(this.data)
     
    });
    // this.ArticlePic=localStorage.getItem("ArticlePic")
   
    // this.FacturePic=localStorage.getItem("FacturePic")
   
    this.sav=localStorage.getItem("sav")
    let gar=this.duree.valueOf();
this.DateFin=moment(this.date).add(gar, 'M').lang("fr").format('DD MMMM YYYY')
  }
  async getNavParamsData() {
    if (this.navParams.get('ArticlePic')) {
      this.ArticlePic = this.navParams.get('ArticlePic');
    
    }
    if (this.navParams.get('FacturePic')) {
      this.FacturePic = this.navParams.get('FacturePic');
    
    }

    console.log(this.DateFin)
  }
  ionViewDidLoad() {
 
    this.getNavParamsData();
    console.log('ionViewDidLoad RecapitulatifProduitPage');
  }
  ngOnInit(){
    this.id=localStorage.getItem("id")

  }
  Previous(){
    this.navCtrl.pop()
  }


EditE(){
  this.CantEditE=!this.CantEditE;
}
EditM(){
  this.CantEditM=!this.CantEditM;
}
EditP(){
  this.CantEditP=!this.CantEditP;
}
EditD(){
  this.CantEditD=!this.CantEditD;
}
EditDu(){
  this.CantEditDu=!this.CantEditDu;
}

UploadArticle(){
  let Article={
    enseigne: this.enseigne,
    nom: this.Produit,
    dachat: moment(this.date).lang("fr").format('DD MMMM YYYY'),
    garantie: this.duree,
    marque:this.Marque,
    sav: this.sav,
    facture: this.FacturePic,
  photo: this.ArticlePic,
    user: this.id,
    dfin: this.DateFin
};
const loading = this.loadingCtrl.create();

loading.present();
  this.articleProvider.addArticle(Article).then((result) => {
    console.log(result);
    loading.dismiss();
  this.navCtrl.push('MesProduitsPage')
    this.enseigne=localStorage.setItem("enseigne","")
    
    this.Marque=localStorage.setItem("libelle","")
  
    this.Produit=localStorage.setItem("nom","")
 
    this.date=localStorage.setItem("date","")

    this.duree=localStorage.setItem("garantie","")
   
}, (err) => {

    console.log(err)
   
});
}
}
