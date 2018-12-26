import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DeposerAnnoncePage } from './deposer-annonce';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    DeposerAnnoncePage,
  ],
  imports: [
    IonicPageModule.forChild(DeposerAnnoncePage),
    ComponentsModule.forRoot()
  ],
})
export class DeposerAnnoncePageModule {}
