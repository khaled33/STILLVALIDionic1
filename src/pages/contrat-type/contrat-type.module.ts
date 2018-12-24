import { ComponentsModule } from './../../components/components.module';
import { HeaderComponent } from './../../components/header/header';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ContratTypePage } from './contrat-type';

@NgModule({
  declarations: [
    ContratTypePage,
    
  ],
  imports: [
    IonicPageModule.forChild(ContratTypePage),
    ComponentsModule.forRoot()
  ],
})
export class ContratTypePageModule {}
