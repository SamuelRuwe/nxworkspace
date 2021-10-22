import { Component } from '@angular/core';

@Component({
  selector: 'nx-workspace-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  items = [{title: 'Slide 1'}, {title: 'Slide 2'}, {title: 'Slide 3'}];

  title = 'card-carousel';

  log() {
    console.log('clicked');
  }
}
