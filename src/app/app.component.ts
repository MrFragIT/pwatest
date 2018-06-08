import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Cavia';
  imgIds: number[];

  constructor() {
    this.imgIds = [];
    for (let i = 0; i < 10; i++) {
      this.imgIds.push(i);
    }
  }
}
