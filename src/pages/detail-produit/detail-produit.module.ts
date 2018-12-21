import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetailProduitPage } from './detail-produit';

@NgModule({
  declarations: [
    DetailProduitPage,
  ],
  imports: [
    IonicPageModule.forChild(DetailProduitPage),
  ],
})
export class DetailProduitPageModule {}
