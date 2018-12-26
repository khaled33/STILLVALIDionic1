import { ComponentsModule } from './../../components/components.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AjouterArticlePage } from './ajouter-article';

@NgModule({
  declarations: [
    AjouterArticlePage,
  ],
  imports: [
    IonicPageModule.forChild(AjouterArticlePage),
    ComponentsModule.forRoot()
  ],
})
export class AjouterArticlePageModule {}
