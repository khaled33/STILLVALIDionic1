import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http'; 
import { MyApp } from './app.component';
import { UserProvider } from '../providers/user/user';
import { MarquesProvider } from '../providers/marques/marques';
import { ArticleProvider } from '../providers/article/article';
import { ContratProvider } from '../providers/contrat/contrat';

import { SpeechRecognition } from '@ionic-native/speech-recognition';
import { CameraProvider } from '../providers/camera/camera';
import { Camera } from '@ionic-native/camera';
import { ImagePicker } from '@ionic-native/image-picker';
import { AnoonceProvider } from '../providers/anoonce/anoonce';
// import { Base64 } from '@ionic-native/base64';


@NgModule({
  declarations: [
    MyApp,

  ],
  imports: [
    HttpModule,
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
  
  ],
  providers: [
   
    StatusBar,
    // Base64,
    SplashScreen,
    Camera,
    UserProvider,
    UserProvider,
    MarquesProvider,
    ArticleProvider,
    ContratProvider,
    ImagePicker,
   SpeechRecognition,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CameraProvider,
    AnoonceProvider,
  ]
})
export class AppModule {}
