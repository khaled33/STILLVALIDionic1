import { ContratProvider } from './../../providers/contrat/contrat';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController,Loading } from 'ionic-angular';
import { identifierModuleUrl } from '@angular/compiler';
import moment from 'moment';
/**
 * Generated class for the RecapitulatifContratPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-recapitulatif-contrat',
  templateUrl: 'recapitulatif-contrat.html',
})
export class RecapitulatifContratPage {
CantEdit:boolean;
loading: Loading;
images: any = [];
image:any;
type:any;
date:any;
id:any;
data :any;
cont:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl:LoadingController,private contratProvider:ContratProvider) {
  //  this.images=localStorage.getItem("imagesContrat")
  this.type=localStorage.getItem('type')
  this.date=localStorage.getItem("dateC")
  this.contratProvider.getTypes().then(res=>{
    this.cont=res;
   
    console.log(this.data)
   
  });
  }
//   presentLoading() {
//     this.loading = this.loadingCtrl.create({
//        content: 'Please wait...'
//     });
//     this.loading.present();
// }

// dismissLoading(){
//     this.loading.dismiss();
// }
  async getNavParamsData() {
    if (this.navParams.get('images')) {
      this.images = this.navParams.get('images');
      this.image=this.images[1];
    }
  }
  ngOnInit(){
    this.id=localStorage.getItem("id")
    this.CantEdit=true;
   // this.presentLoading();
  }
  Previous(){
    this.navCtrl.pop()
  }
  ionViewDidLoad() {
    this.getNavParamsData()

    console.log('ionViewDidLoad RecapitulatifContratPage');
  }

Edit(){
  this.CantEdit=false;
}
Uploadimages(ID){
  for(var i = 0; i < this.images.length; i++){
    console.log();

  let paper={
    photo:this.images[i],
    id_contrat:ID

};
  this.contratProvider.AddPaper(paper).then((result) => {
    console.log(result);
    
}, (err) => {

    console.log(err)
   
});
}
}
UploadContrat(){
  let Contrat={
    type:this.type,
    decheance:moment(this.date).lang("fr").format('DD MMMM YYYY'),
    photo:this.image,
    user_id: this.id,
   
};
const loading = this.loadingCtrl.create();

loading.present();
  this.contratProvider.AddContact(Contrat).then((result) => {
    console.log(this.data);
    this.data=result;
    let id =this.data.id
   this.Uploadimages(id);
   localStorage.removeItem("type")
  
  localStorage.removeItem("dateC")
   loading.dismiss();
  this.navCtrl.push('MesProduitsPage')
    
   

}, (err) => {

    console.log(err)
   
});
}
}
