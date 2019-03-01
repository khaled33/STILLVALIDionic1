import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, PopoverController } from 'ionic-angular';

/**
 * Generated class for the BoutiqueDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-boutique-detail',
  templateUrl: 'boutique-detail.html',
})
export class BoutiqueDetailPage {
  categorie:any;
  description:any;
  email:any;
  numtel:any;
  photoproduit:any;
  prix:any;
  titre:any;
  user_id:any;
  ville:any;
  id:any;

  myID:any;
  constructor(public popoverCtrl:PopoverController,public viewctrl:ViewController, public navCtrl: NavController, public navParams: NavParams) {
    this.myID=localStorage.getItem("id")
  }


  presentMenu(myEvent) {
    console.log(myEvent);
    let popover = this.popoverCtrl.create('PopOverPage',  {idAnnonce:this.id,categorie:this.categorie,description:this.description,email:this.email,numtel:this.numtel,photoproduit:this.photoproduit,prix:this.prix,titre:this.titre,ville:this.ville,user_id:this.user_id} );
    popover.present({
      ev: myEvent
    });
  }

  ionViewDidLoad() {
    this.getNavParamsData()
    console.log('ionViewDidLoad BoutiqueDetailPage');
  }
  async getNavParamsData() {
    if (this.navParams.get('id')) {
      this.id = this.navParams.get('id');
    
     console.log(this.id)
    }
    
    if (this.navParams.get('categorie')) {
      this.categorie = this.navParams.get('categorie');
    

    }
  
    if (this.navParams.get('description')) {
      this.description = this.navParams.get('description');
    
    }
    if (this.navParams.get('email')) {
      this.email = this.navParams.get('email');
    
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

Dimiss(){
  this.viewctrl.dismiss()
}
}
