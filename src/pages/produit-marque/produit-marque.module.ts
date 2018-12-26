import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProduitMarquePage } from './produit-marque';
import { ComponentsModule } from './../../components/components.module';
@NgModule({
  declarations: [
    ProduitMarquePage,
  ],
  imports: [
    IonicPageModule.forChild(ProduitMarquePage),
    ComponentsModule.forRoot()
  ],
})
export class ContratMarquePageModule {}
