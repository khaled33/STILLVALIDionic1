import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VoirProduitPage } from './voir-produit';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    VoirProduitPage,
  ],
  imports: [
    IonicPageModule.forChild(VoirProduitPage),
    ComponentsModule.forRoot()

  ],
})
export class VoirProduitPageModule {}
