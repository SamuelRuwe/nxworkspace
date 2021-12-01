import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { MatInput } from '@angular/material/input';
import { FormControl } from '@angular/forms';
import { MaskDirective, MaskService } from 'ngx-mask';

@Component({
  selector: 'pg-forms-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],
  providers: [
    MaskService
  ]
})
export class CalendarComponent {

  @ViewChild('matInput', { read: MatInput }) matInput!: MatInput;
  @ViewChild('matInput', { read: ElementRef }) input!: HTMLInputElement & HTMLElement & ElementRef;
  @ViewChild('matInput', { read: MaskDirective }) mask!: MaskDirective;
  @Input() control!: FormControl;
  errorMessage!: string;

  constructor(private maskService: MaskService) {}

  change($event: MatDatepickerInputEvent<unknown, unknown | null>) {
    if (!$event.value) return;
    ($event.value as Date).getFullYear();
    this.control.setValue($event.value);
    this.matInput.errorState = !this.control.valid;
    this.errorMessage = 'Please enter a valid date';
    // this.input.nativeElement.setSelectionRange(10, 10);
    // this.mask['_maskService'].actualValue = '11/11/1111';
    this.input.nativeElement.selectionStart = 5;
    this.input.nativeElement.selectionEnd = 5;
    // console.log(this.mask);
    console.log(this.input.nativeElement.selectionStart);
    // console.log(this.maskService);
  }

  clearStartDate() {
    this.matInput.value = '';
    this.control.setValue('');
  }

}
