import { ContratProvider } from './../../providers/contrat/contrat';
import { ArticleProvider } from './../../providers/article/article';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Loading, LoadingController } from 'ionic-angular';
import moment from 'moment';
/**
 * Generated class for the MesProduitsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mes-produits',
  templateUrl: 'mes-produits.html',
})
export class MesProduitsPage {
article: any = [];
MyArticle:any=[];
contrat:any;
MyContrat:any=[];
loading: Loading;
  constructor(public loadingCtrl:LoadingController,public contratService:ContratProvider ,public articleService:ArticleProvider , public navCtrl: NavController, public navParams: NavParams) {
    let id=localStorage.getItem('id')
   
    this.articleService.GetUserArticle(id).then(res=>{
      this.article=res;
      for(let item of this.article){

 

        let dfin = item.dfin;
        let y = dfin.split(" ");
        console.log(y[1]);


        switch(y[1]) { 
          case "janvier":
          y[1]="January";
          break;
      case "février":
      y[1]="February";
          break;
      case "mars":
      y[1]="March";
          break;
      case "avril":
      y[1]="April";
          break;
      case "mai":
      y[1]="May";
          break;
      case "juin":
      y[1]="June";
          break;
      case "juillet":
      y[1]="July";
          break;
      case "août":
      y[1]="August";
          break;
      case "septembre":
      y[1]="September";
          break;
      case "octobre":
      y[1]="October";
          break;
      case "novembre":
      y[1]="November";
          break;
      case "décembre":
      y[1]="December";
          break;
      }
       let fin=y[0]+'-'+y[1]+'-'+y[2];
      
       
      let time = new Date(fin).getTime() -new Date().getTime() ;
      let day= Math.floor((time/(1000*60*60*24)));
      console.log(day)

      let art={
        dachat: item.dachat,
        dfin:item.dfin,
        enseigne: item.enseigne,
        facture: item.facture,
        garantie: item.garantie,
        id: item.id,
        marque: item.marque,
        nom: item.nom,
        photo: item.photo,
        sav: item.sav,
        user_id: item.user_id,
        days:day
       
    };
      JSON.stringify(art)
    this.MyArticle.push(art);
    console.log(this.MyArticle)
     
  }
    })
  



    this.contratService.GetUserContrat(id).then(res=>{
      this.contrat=res;
      for(let item of  this.contrat){

 

        let dfin = item.decheance;
        let y = dfin.split(" ");
        console.log(y[1]);


        switch(y[1]) { 
          case "janvier":
          y[1]="January";
          break;
      case "février":
      y[1]="February";
          break;
      case "mars":
      y[1]="March";
          break;
      case "avril":
      y[1]="April";
          break;
      case "mai":
      y[1]="May";
          break;
      case "juin":
      y[1]="June";
          break;
      case "juillet":
      y[1]="July";
          break;
      case "août":
      y[1]="August";
          break;
      case "septembre":
      y[1]="September";
          break;
      case "octobre":
      y[1]="October";
          break;
      case "novembre":
      y[1]="November";
          break;
      case "décembre":
      y[1]="December";
          break;
      }
       let fin=y[0]+'-'+y[1]+'-'+y[2];
      
       
      let time = new Date(fin).getTime() -new Date().getTime() ;
      let day= Math.floor((time/(1000*60*60*24)));
      console.log(day)

      let cont={
        decheance: item.decheance,
        id: item.id,
        photo: item.photo,
        type: item.type,
        user_id: item.user_id,
        days:day
       
    };
      JSON.stringify(cont)
    this.MyContrat.push(cont);
    console.log(this.MyContrat)
     
  }
    })
   
  }
  ngOnInit() {
 
    this.presentLoading();
   
  
   
  }
  ionViewDidLoad() {
  
    console.log('ionViewDidLoad MesProduitsPage');
  }
  GoToProduitDetail(articleID,enseigne,marque,nom,dachat,garantie,photo,facture,dfin,sav,days){
 
this.navCtrl.setRoot("DetailProduitPage", { articleID: articleID,enseigne: enseigne,marque: marque,nom: nom,dachat: dachat,garantie: garantie,photo: photo,facture:facture,dfin:dfin ,sav:sav, days: days})
  }
 GoToContratDetail(contratID,decheance,photo,type,days){
  this.navCtrl.push("DetailContratPage", { contratID: contratID, decheance: decheance, photo: photo, type: type, days: days })
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
