import { Component, ContentChild, OnInit } from '@angular/core';
import { WIDGET } from '../widget.token';
import { Widget } from '../widget.interface';

@Component({
  selector: 'pg-layout-card-refresh-wrapper',
  templateUrl: './card-refresh-wrapper.component.html',
  styleUrls: ['./card-refresh-wrapper.component.css']
})
export class CardRefreshWrapperComponent implements OnInit {

  @ContentChild(WIDGET, {static: true})
  widget!: Widget;

  ngOnInit() {
    this.widget.load();
  }

  onRefresh() {
    this.widget.refresh();
  }

}
