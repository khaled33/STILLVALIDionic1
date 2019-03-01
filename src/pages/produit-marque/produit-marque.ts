import { MarquesProvider } from './../../providers/marques/marques';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder,Validators } from '@angular/forms';
/**
 * Generated class for the ContratMarquePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-produit-marque',
  templateUrl: 'produit-marque.html',
})
export class ProduitMarquePage {
  marqueForm:FormGroup;
  marque:any;
  ens:any;
  data:any;
  libelle:any;
  sav:any;
  constructor(public Services:MarquesProvider,public navCtrl: NavController, public navParams: NavParams, public formBuilder:FormBuilder) {
this.marque={id:"",libelle:"",sav:"",soutien:""}
    this.marqueForm = this.formBuilder.group({
      marque: ['']
    });



    this.Services.getMarques().then(res=>{
      this.data=res;
     
      console.log(this.data)
     
    });

  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContratMarquePage');
  }
  Previous(){
    this.navCtrl.setRoot('ProduitEnseignePage')
  }
  Next(){
    this.navCtrl.setRoot('AjouterArticlePage')
    localStorage.setItem("sav",this.marque.sav)
    localStorage.setItem("libelle",this.marque.libelle)
  }
}
