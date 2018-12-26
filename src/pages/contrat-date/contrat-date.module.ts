import { ComponentsModule } from './../../components/components.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ContratDatePage } from './contrat-date';

@NgModule({
  declarations: [
    ContratDatePage,
  ],
  imports: [
    IonicPageModule.forChild(ContratDatePage),
    ComponentsModule.forRoot()
  ],
})
export class ContratDatePageModule {}
