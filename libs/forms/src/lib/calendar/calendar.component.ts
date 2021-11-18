import { ChangeDetectionStrategy, Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { map, Subscription, tap } from 'rxjs';
import { MaskDateDirective } from './mask-date.directive';
import { WATCHED_CONTROLLER, WATCHED_CONTROLLER_PROVIDER } from './factory-token';

@Component({
  selector: 'pg-forms-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],
  providers: [WATCHED_CONTROLLER_PROVIDER],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class CalendarComponent implements OnInit {

  @ViewChild('cal') cal!: HTMLInputElement & ElementRef;
  control: FormControl = new FormControl();
  obs$!: Subscription;

  constructor(@Inject(WATCHED_CONTROLLER) readonly controller: MaskDateDirective) {}

  ngOnInit(): void {
    this.obs$ = this.control.valueChanges.pipe(
      tap(console.log),
      tap(() => console.log(this.cal.nativeElement)),
      map((val) => this.cal.nativeElement.value = val)
    ).subscribe();
  }

}
