import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FacturePicPage } from './facture-pic';

@NgModule({
  declarations: [
    FacturePicPage,
  ],
  imports: [
    IonicPageModule.forChild(FacturePicPage),
  ],
})
export class FacturePicPageModule {}
