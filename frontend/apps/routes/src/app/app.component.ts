import { Component } from '@angular/core';

@Component({
  selector: 'nx-workspace-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  navoptions = {routes: [{name: 'Users', route: 'users'}]};
}
