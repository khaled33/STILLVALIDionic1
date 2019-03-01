import { ContratProvider } from './../../providers/contrat/contrat';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder,Validators } from '@angular/forms';
/**
 * Generated class for the ContratTypePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contrat-type',
  templateUrl: 'contrat-type.html',
})
export class ContratTypePage {
  typeForm:FormGroup;
  text:any;
data:any;
type:any;
  constructor(public Services:ContratProvider, public navCtrl: NavController, public navParams: NavParams, public formBuilder:FormBuilder) {
    this.Services.getTypes().then(res=>{
      this.data=res;
     
      console.log(this.data)
     
    });

    this.typeForm = this.formBuilder.group({
      type: ['', [Validators.required]]
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContratTypePage');
  }
  Previous(){
    this.navCtrl.pop()
  }
Next(){
  this.navCtrl.push('ContratDatePage')
  localStorage.setItem('type',this.type)
}
chooseType(type){


}
}
