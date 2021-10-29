import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'pg-layout-submit-close-wrapper',
  templateUrl: './submit-close-wrapper.component.html',
  styleUrls: ['./submit-close-wrapper.component.css']
})
export class SubmitCloseWrapperComponent {

  @Output() closeEmitter: EventEmitter<any> = new EventEmitter();

  close(args?: any) {
    this.closeEmitter.emit(args);
  }

}
