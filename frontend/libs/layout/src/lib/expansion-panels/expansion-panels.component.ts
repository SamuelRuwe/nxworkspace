import { Component, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';

@Component({
  selector: 'pg-layout-expansion-panels',
  templateUrl: './expansion-panels.component.html',
  styleUrls: ['./expansion-panels.component.css']
})
export class ExpansionPanelsComponent {
  @ViewChild(MatAccordion) accordion!: MatAccordion;
}
