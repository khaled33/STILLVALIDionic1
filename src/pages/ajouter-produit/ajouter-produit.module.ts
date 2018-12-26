import { ComponentsModule } from './../../components/components.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AjouterProduitPage } from './ajouter-produit';

@NgModule({
  declarations: [
    AjouterProduitPage,
  ],
  imports: [
    IonicPageModule.forChild(AjouterProduitPage),
    ComponentsModule.forRoot()
  ],
})
export class AjouterProduitPageModule {}
