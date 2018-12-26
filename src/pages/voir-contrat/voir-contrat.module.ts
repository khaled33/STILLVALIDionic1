import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VoirContratPage } from './voir-contrat';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    VoirContratPage,
  ],
  imports: [
    IonicPageModule.forChild(VoirContratPage),
    ComponentsModule.forRoot()
  ],
})
export class VoirContratPageModule {}
