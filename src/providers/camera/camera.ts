import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Camera } from '@ionic-native/camera';


import { Http , Headers } from '@angular/http';
/*
  Generated class for the CameraProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CameraProvider {

  constructor( public http: Http,private camera: Camera) {
  }

  getPictureFromCamera() {
    return this.getImage(this.camera.PictureSourceType.CAMERA, true);
  }

  getPictureFromPhotoLibrary() {
    return this.getImage(this.camera.PictureSourceType.PHOTOLIBRARY);
  }

  // This method takes optional parameters to make it more customizable
  getImage(pictureSourceType, crop = false, quality = 100, allowEdit = true, saveToAlbum = true,correctOrientation=true) {
    const options = {
      quality,
      allowEdit,
      correctOrientation,
      destinationType: this.camera.DestinationType.DATA_URL,
      sourceType: pictureSourceType,
      encodingType: this.camera.EncodingType.JPEG,
      saveToPhotoAlbum: saveToAlbum,
      maximumImagesCount: 10 
    };

    // If set to crop, restricts the image to a square of 600 by 600
    if (crop) {
      options['targetWidth'] = 800;
      options['targetHeight'] =800;
    }

    return this.camera.getPicture(options).then(imageData => {
      const base64Image =  imageData;
      return base64Image;
      
    }, error => {
      console.log('CAMERA ERROR -> ' + JSON.stringify(error));
    });
  }




}
