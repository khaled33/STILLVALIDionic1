import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BoutiqueDetailPage } from './boutique-detail';

@NgModule({
  declarations: [
    BoutiqueDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(BoutiqueDetailPage),
  ],
})
export class BoutiqueDetailPageModule {}
