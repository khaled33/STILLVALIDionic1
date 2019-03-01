import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FicheProduitPage } from './fiche-produit';

@NgModule({
  declarations: [
    FicheProduitPage,
  ],
  imports: [
    IonicPageModule.forChild(FicheProduitPage),
  ],
})
export class FicheProduitPageModule {}
