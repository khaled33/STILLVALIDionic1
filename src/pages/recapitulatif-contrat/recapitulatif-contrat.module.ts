import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RecapitulatifContratPage } from './recapitulatif-contrat';
import { ComponentsModule } from './../../components/components.module';
@NgModule({
  declarations: [
    RecapitulatifContratPage,
  ],
  imports: [
    IonicPageModule.forChild(RecapitulatifContratPage),
    ComponentsModule.forRoot()
  ],
})
export class RecapitulatifContratPageModule {}
