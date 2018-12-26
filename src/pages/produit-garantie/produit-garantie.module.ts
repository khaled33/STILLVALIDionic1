import { ComponentsModule } from './../../components/components.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProduitGarantiePage } from './produit-garantie';

@NgModule({
  declarations: [
    ProduitGarantiePage,
  ],
  imports: [
    IonicPageModule.forChild(ProduitGarantiePage),
    ComponentsModule.forRoot()
  ],
})
export class ProduitGarantiePageModule {}
