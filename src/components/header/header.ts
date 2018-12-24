import { Component, Input } from '@angular/core';


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

  constructor() {
    console.log('Hello HeaderComponent Component');
    
  }

  ngOnInit() {
  }

}
