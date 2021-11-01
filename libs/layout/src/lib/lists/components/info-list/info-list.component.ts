import { Component, Input } from '@angular/core';
import { ListData } from '../list-data.interface';

@Component({
  selector: 'pg-layout-info-list',
  templateUrl: './info-list.component.html',
  styleUrls: ['./info-list.component.css']
})
export class InfoListComponent {
  @Input() data!: Array<ListData>;
}
