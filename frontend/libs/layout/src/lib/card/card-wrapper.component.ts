import { Component, Input } from '@angular/core';

@Component({
  selector: 'pg-layout-card-wrapper [title]',
  templateUrl: './card-wrapper.component.html',
  styleUrls: ['./card-wrapper.component.css']
})
export class CardWrapperComponent {
  @Input() title!: string;
}
