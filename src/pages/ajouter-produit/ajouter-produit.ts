import { ArticleProvider } from './../../providers/article/article';
import { CameraProvider } from './../../providers/camera/camera';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';


/**
 * Generated class for the AjouterProduitPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ajouter-produit',
  templateUrl: 'ajouter-produit.html',
})
export class AjouterProduitPage {
  ArticlePic: any;
  FacturePic:any;
  constructor(private cameraProvider:CameraProvider ,private articleProvider:ArticleProvider , public loadingCtrl:LoadingController,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AjouterProduitPage');
  }
  Previous(){
    this.navCtrl.pop()
   
  }
Next(){
  let ArticlePic=this.ArticlePic;
  let FacturePic=this.FacturePic;
  this.navCtrl.push('RecapitulatifProduitPage',{ ArticlePic:ArticlePic,FacturePic:FacturePic })
}

  
  takePictureArticle() {
    const loading = this.loadingCtrl.create();

    loading.present();
    return this.cameraProvider.getPictureFromCamera().then(picture => {
      if (picture) {
        this.ArticlePic = picture;
        
      }
      loading.dismiss();
      localStorage.setItem("ArticlePic",this.ArticlePic );
      
    

    }, error => {
      alert(error);
    });
  }
  takePictureFacture() {
    const loading = this.loadingCtrl.create();

    loading.present();
    return this.cameraProvider.getPictureFromCamera().then(picture => {
      if (picture) {
        this.FacturePic = picture;
       
      }
      loading.dismiss();
      localStorage.setItem("FacturePic",this.FacturePic );
      
    

    }, error => {
      alert(error);
    });
  }



  }


  

