import { ComponentsModule } from './../../components/components.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AjouterContratPage } from './ajouter-contrat';

@NgModule({
  declarations: [
    AjouterContratPage,
  ],
  imports: [
    IonicPageModule.forChild(AjouterContratPage),
    ComponentsModule.forRoot()
  ],
})
export class AjouterContratPageModule {}
