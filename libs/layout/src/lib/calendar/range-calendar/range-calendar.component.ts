import {Component, OnInit} from '@angular/core';
import {CalendarComponent} from '../calendar.component';

@Component({
  selector: 'dv-form-range-calendar',
  templateUrl: './range-calendar.component.html',
  styleUrls: ['./range-calendar.component.css']
})
export class RangeCalendarComponent extends CalendarComponent implements OnInit {

  // @Input()
  minDate: Date;
  maxDate: Date;

  ngOnInit(): void {
    this.minDate = new Date(2021, 5, 17);
    this.maxDate = new Date(2021, 5, 19);
  }

}
