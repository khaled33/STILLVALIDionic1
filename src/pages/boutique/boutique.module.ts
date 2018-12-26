import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BoutiquePage } from './boutique';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    BoutiquePage,
  ],
  imports: [
    IonicPageModule.forChild(BoutiquePage),
    ComponentsModule.forRoot()
  ],
})
export class BoutiquePageModule {}
