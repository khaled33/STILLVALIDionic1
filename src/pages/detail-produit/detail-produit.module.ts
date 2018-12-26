import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetailProduitPage } from './detail-produit';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    DetailProduitPage,
  ],
  imports: [
    IonicPageModule.forChild(DetailProduitPage),
    ComponentsModule.forRoot()
  ],
})
export class DetailProduitPageModule {}
