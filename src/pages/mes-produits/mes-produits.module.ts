import { ComponentsModule } from './../../components/components.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MesProduitsPage } from './mes-produits';

@NgModule({
  declarations: [
    MesProduitsPage,
  ],
  imports: [
    IonicPageModule.forChild(MesProduitsPage),
    ComponentsModule.forRoot()
  ],
})
export class MesProduitsPageModule {}
