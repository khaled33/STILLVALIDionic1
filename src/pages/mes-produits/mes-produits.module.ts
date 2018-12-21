import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MesProduitsPage } from './mes-produits';

@NgModule({
  declarations: [
    MesProduitsPage,
  ],
  imports: [
    IonicPageModule.forChild(MesProduitsPage),
  ],
})
export class MesProduitsPageModule {}
