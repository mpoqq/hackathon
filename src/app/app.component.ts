import { Component } from '@angular/core';

declare var L;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  checked = true;
  title = 'board';

  constructor() {
   
  }
}