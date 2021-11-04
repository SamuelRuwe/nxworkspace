import { Attribute, Component } from '@angular/core';

@Component({
  selector: 'pg-layout-card-wrapper [title]',
  templateUrl: './card-wrapper.component.html',
  styleUrls: ['./card-wrapper.component.css']
})
export class CardWrapperComponent {
  // @Attribute() doesn't reevaluate when ChangeDetection runs whereas @Input() properties are reevaluated
  constructor(@Attribute('title') public title: string) {}
}
