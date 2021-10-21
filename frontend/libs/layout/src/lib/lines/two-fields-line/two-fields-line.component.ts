import { Component, Input } from '@angular/core';

@Component({
  selector: 'pg-layout-two-fields-line',
  templateUrl: './two-fields-line.component.html',
  styleUrls: ['./two-fields-line.component.css']
})
export class TwoFieldsLineComponent {
  @Input() data1!: { field: unknown, value: unknown };
  @Input() data2!: { field: unknown, value: unknown };
}
