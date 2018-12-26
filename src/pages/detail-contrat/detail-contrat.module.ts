import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetailContratPage } from './detail-contrat';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    DetailContratPage,
  ],
  imports: [
    IonicPageModule.forChild(DetailContratPage),
    ComponentsModule.forRoot()
  ],
})
export class DetailContratPageModule {}
