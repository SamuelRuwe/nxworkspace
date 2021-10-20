import { Component } from '@angular/core';

@Component({
  selector: 'pg-layout-info-list',
  templateUrl: './info-list.component.html',
  styleUrls: ['./info-list.component.css']
})
export class InfoListComponent {

  messages = [
    {
      icon: 'phone',
      from: 'Phone Number',
      subject: '(336) 577-2062',
      content: 'Message Content 1'
    },
    {
      icon: 'email',
      from: 'Email',
      subject: 'ruwesam@gmail.com',
      content: 'Message Content 2'
    },
  ]

}
