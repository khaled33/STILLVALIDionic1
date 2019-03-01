import { ComponentsModule } from './../../components/components.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RecapitulatifProduitPage } from './recapitulatif-produit';

@NgModule({
  declarations: [
    RecapitulatifProduitPage,
  ],
  imports: [
    IonicPageModule.forChild(RecapitulatifProduitPage),
    ComponentsModule.forRoot()
  ],
})
export class RecapitulatifProduitPageModule {}
