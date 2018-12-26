import { ComponentsModule } from '../../components/components.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import {ProduitEnseignePage } from './produit-enseigne';

@NgModule({
  declarations: [
    ProduitEnseignePage,
  ],
  imports: [
    IonicPageModule.forChild(ProduitEnseignePage),
    ComponentsModule.forRoot()
  ],
})
export class ProduitEnseignePageModule {}
