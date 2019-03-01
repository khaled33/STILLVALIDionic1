import { ContratProvider } from './../../providers/contrat/contrat';
import { CameraProvider } from './../../providers/camera/camera';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ActionSheetController, Platform, LoadingController } from 'ionic-angular';

/**
 * Generated class for the ModifContratImagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modif-contrat-image',
  templateUrl: 'modif-contrat-image.html',
})
export class ModifContratImagePage {

  pic:any;
  idP:any;
  constructor(public contratService:ContratProvider, public loadingCtrl: LoadingController, public actionsheetCtrl: ActionSheetController,
    public cameraProvider: CameraProvider,
    public platform: Platform,public viewctrl: ViewController,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.getNavParamsData()
    console.log('ionViewDidLoad FacturePicPage');
  }
  Dimiss(){
    this.viewctrl.dismiss()
  }
  async getNavParamsData() {
    if (this.navParams.get('pic')) {
      this.pic = this.navParams.get('pic');
   
    }
    if (this.navParams.get('idP')) {
      this.idP = this.navParams.get('idP');
   
    }
  }

  modifPic(){
    const actionsheet = this.actionsheetCtrl.create({
      title: 'upload picture',
      buttons: [
        {
          text: 'Take Photo',
          icon: !this.platform.is('ios') ? 'camera' : null,
          handler: () => {
            this.takePicture();
           
          }
          
        },
        {
          text: !this.platform.is('ios') ? 'gallery' : 'Choose From Gallery',
          icon: !this.platform.is('ios') ? 'image' : null,
          handler: () => {
            this.getPicture();
           
          }
        },
        {
          text: 'cancel',
          icon: !this.platform.is('ios') ? 'close' : null,
          role: 'destructive',
          handler: () => {
            console.log('the user has cancelled the interaction.');
          }
        }
      ]
    });
    return actionsheet.present();
  }

  takePicture() {
    const loading = this.loadingCtrl.create();

    loading.present();
    return this.cameraProvider.getPictureFromCamera().then(picture => {
      if (picture) {
        this.pic = picture;
        
      }
      this.ModifPicService();
      loading.dismiss();
     
      
   

    }, error => {
      alert(error);
    });
  }

  getPicture() {
    const loading = this.loadingCtrl.create();

    loading.present();
    return this.cameraProvider.getPictureFromPhotoLibrary().then(picture => {
      if (picture) {
        this.pic = picture;
       
      }
      this.ModifPicService();
      loading.dismiss();
 
    }, error => {
      alert(error);
    });
  }
  ModifPicService(){
    let paper={
      photo:this.pic
  };
    this.contratService.ModifPaper(paper,this.idP).then((result) => {
      console.log(result);
      
  }, (err) => {
  
      console.log(err)
     
  });
  }



  
  }






