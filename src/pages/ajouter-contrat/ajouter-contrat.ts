import { CameraProvider } from './../../providers/camera/camera';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import {  
  ImagePicker,  
  ImagePickerOptions  
} from '@ionic-native/image-picker';  
/**
 * Generated class for the AjouterContratPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ajouter-contrat',
  templateUrl: 'ajouter-contrat.html',
})
export class AjouterContratPage {
  chosenPicture: any;
  images: any = [];
  image :any;
i:any
a:any;
IsEnable:boolean;
date:any;
  constructor(private imagePicker: ImagePicker,private cameraProvider:CameraProvider, public loadingCtrl:LoadingController,public navCtrl: NavController, public navParams: NavParams) {
  this.i=10;

  this.a=0;

  if(this.i>=this.a){
    this.IsEnable=false;
  }

  this.date=localStorage.getItem("dateC").toString()
  console.log(this.date)
  }

  // getPictures(){ 
  //   let options: ImagePickerOptions = {  
      
  //     quality: 100,  
      
  //     width: 600,  
     
  //     height: 600,  
   
      
  //     outputType: 1  ,
     
  //     maximumImagesCount: 10  
     
  // }; 
  //   this.imagePicker.getPictures(options).then( results =>{
  //     console.log(results);
  //     for(let i=0; i < results.length;i++){
  //       this.images.push(results[i]);
  //       this.chosenPicture=results[1]
  //     };
  //     alert(this.images)
  //     alert(this.chosenPicture)
  //   });
  // }






  ionViewDidLoad() {
    console.log('ionViewDidLoad AjouterContratPage');
  }
  Next(){
    const loading = this.loadingCtrl.create();

    loading.present();
    let images=this.images;
    this.navCtrl.setRoot('RecapitulatifContratPage',{images:images})
     localStorage.setItem("imagesContrat",this.images)
     loading.dismiss();
  }
Previous(){
  this.navCtrl.setRoot('ContratDatePage')
}
takePicture() {
  const loading = this.loadingCtrl.create();

  loading.present();
  return this.cameraProvider.getPictureFromCamera().then(picture => {
    if (picture) {
      this.chosenPicture = picture;
     
      this.images.push( this.chosenPicture);
      this.i--;
  
    }
    
    localStorage.setItem("pic",this.chosenPicture );
    loading.dismiss()
    setTimeout(() => {
     // this. GoTosignup(picture);
    },1000);

  }, error => {
    alert(error);
  });
}

getPicture() {
   
  return this.cameraProvider.getPictureFromPhotoLibrary().then(picture => {
    if (picture) {
      this.chosenPicture = picture;
      
      this.images.push( this.chosenPicture);
      this.i--;
    }
   
    localStorage.setItem("pic",this.chosenPicture);
  
    setTimeout(() => {
    //  this. GoTosignup(picture);
    },1000);
  }, error => {
    alert(error);
  });
}
}
