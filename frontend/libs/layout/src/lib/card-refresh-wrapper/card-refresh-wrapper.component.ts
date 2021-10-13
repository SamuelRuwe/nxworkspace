import { Component, ContentChild, OnInit } from '@angular/core';
import { Widget } from './widget.interface';
import { WIDGET } from './widget.token';

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
