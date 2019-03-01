import { MarquesProvider } from './../../providers/marques/marques';
import { CameraProvider } from './../../providers/camera/camera';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { ArticleProvider } from './../../providers/article/article';
import moment from 'moment';
/**
 * Generated class for the VoirProduitPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-voir-produit',
  templateUrl: 'voir-produit.html',
})
export class VoirProduitPage {
  prodID:any;
  enseigne:any;
  marque:any;
  nom:any;
  dachat:any;
  garantie:any;
  photo:any;
  facture:any;
  id:any;
  dfin:any;
  sav:any;
  data:any;
  constructor(public Services:MarquesProvider, private cameraProvider:CameraProvider ,private articleProvider:ArticleProvider , public loadingCtrl:LoadingController,public navCtrl: NavController, public navParams: NavParams) {
  
    
    this.Services.getMarques().then(res=>{
      this.data=res;
     
      console.log(this.data)
     
    });
  
  }
  async getNavParamsData() {
    this.id=localStorage.getItem("id")
    if (this.navParams.get('id')) {
      this.prodID = this.navParams.get('id');
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
      let dchat= this.navParams.get('dachat');
      let d =  dchat;
      let y = d.split(" ");
      console.log(y[1]);


      switch(y[1]) { 
        case "janvier":
        y[1]="1";
        break;
    case "février":
    y[1]="2";
        break;
    case "mars":
    y[1]="3";
        break;
    case "avril":
    y[1]="4";
        break;
    case "mai":
    y[1]="5";
        break;
    case "juin":
    y[1]="6";
        break;
    case "juillet":
    y[1]="7";
        break;
    case "août":
    y[1]="8";
        break;
    case "septembre":
    y[1]="9";
        break;
    case "octobre":
    y[1]="10";
        break;
    case "novembre":
    y[1]="11";
        break;
    case "décembre":
    y[1]="12";
        break;
    }
     let dat =y[2]+'-'+y[1]+'-'+y[0];

     this.dachat= moment(dat);
    console.log(this.dachat)

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

  }
  ionViewDidLoad() {
    this.getNavParamsData()
    console.log('ionViewDidLoad VoirProduitPage');
  }

  takePictureArticle() {
    const loading = this.loadingCtrl.create();

    loading.present();
    return this.cameraProvider.getPictureFromCamera().then(picture => {
      if (picture) {
        this.photo = picture;
  
      }
      loading.dismiss();
      
      
      setTimeout(() => {
       // this. GoTosignup(picture);
      },1000);

    }, error => {
      alert(error);
    });
  }
  takePictureFacture() {
    const loading = this.loadingCtrl.create();

    loading.present();
    return this.cameraProvider.getPictureFromCamera().then(picture => {
      if (picture) {
        this.facture = picture;
        
      }
      loading.dismiss();
    
      
      setTimeout(() => {
       // this. GoTosignup(picture);
      },1000);

    }, error => {
      alert(error);
    });
  }





  UploadArticle(){
    let Article={
      enseigne: this.enseigne,
      nom: this.nom,
      dachat:  moment(this.dachat).lang("fr").format('DD MMMM YYYY'),
      garantie: this.garantie,
      marque:this.marque,
      sav:this.sav,
      facture: this.facture,
      photo: this.photo,
      user: this.id,
      dfin: this.dfin
  };
  const loading = this.loadingCtrl.create();
  loading.present();
    this.articleProvider.ModifArticle(Article,this.prodID).then((result) => {
      console.log(result);
      loading.dismiss();
      this.navCtrl.push('MesProduitsPage');
  }, (err) => {
  
      console.log(err)
     
  });
  }
}
