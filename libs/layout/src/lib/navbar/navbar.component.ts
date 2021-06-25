import { Component, Input } from '@angular/core';
import { NavOptions } from './navbar';

@Component({
  selector: 'nx-workspace-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  @Input() navOptions!: NavOptions;

}
