import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VoirProduitPage } from './voir-produit';

@NgModule({
  declarations: [
    VoirProduitPage,
  ],
  imports: [
    IonicPageModule.forChild(VoirProduitPage),
  ],
})
export class VoirProduitPageModule {}
