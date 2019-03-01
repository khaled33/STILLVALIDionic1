import { Component, Input } from '@angular/core';
import { PopoverController, NavController } from 'ionic-angular';


/**
 * Generated class for the HeaderComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'header',
  templateUrl: 'header.html'
})
export class HeaderComponent {

  @Input() text: string;

  constructor(public navCtrl:NavController,public popoverCtrl:PopoverController) {
    console.log('Hello HeaderComponent Component');
    
  }

  ngOnInit() {
  }
  presentMenu(myEvent) {
    console.log(myEvent);
    let popover = this.popoverCtrl.create('MenuPage');
    popover.present({
      ev: myEvent
    });
  }

  GoHome(){
    this.navCtrl.setRoot('HomePage');
  }
}
