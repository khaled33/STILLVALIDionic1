import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VendreProduitPage } from './vendre-produit';

@NgModule({
  declarations: [
    VendreProduitPage,
  ],
  imports: [
    IonicPageModule.forChild(VendreProduitPage),
  ],
})
export class VendreProduitPageModule {}
