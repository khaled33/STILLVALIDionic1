import { ComponentsModule } from './../../components/components.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProduitDatePage } from './produit-date';

@NgModule({
  declarations: [
    ProduitDatePage,
  ],
  imports: [
    IonicPageModule.forChild(ProduitDatePage),
    ComponentsModule.forRoot()
  ],
})
export class ProduitDatePageModule {}
