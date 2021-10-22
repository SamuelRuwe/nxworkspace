import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'nx-workspace-root',
  template: `
    <x-dropdown [title]="myTitle" (show)="toggle($event)">
      Web Component
    </x-dropdown>
    <nx-workspace-navbar [navOptions]="navOptions"></nx-workspace-navbar>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {

  myTitle = 'web component test title';
  open = false;

  constructor(private router: Router) {}


  navOptions: { routes: Array<{ name: string, route: string }> } = {routes: []}

  toggle(event: any) {
    this.open = event.detail;
  }

  ngOnInit(): void {
    this.router.config.filter((r) => r.data && r.data.name)
      .map((r) => this.navOptions.routes.push({name: r.data?.name, route: r.path ?? ''}));
  }
}
