import { Component, OnDestroy, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { MatExpansionPanel } from '@angular/material/expansion';

@Component({
  selector: 'nx-workspace-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class FormComponent implements OnInit, OnDestroy {

  @ViewChild('expansionPanel', {static: true}) matExpansionPanel!: MatExpansionPanel;

  constructor(private fb: FormBuilder) {}

  isSpecialRequest$!: Subscription;

  form = this.fb.group({
    controlOne: '',
    controlTwo: '',
    controlThree: '',
    controlFour: '',
    isSpecialRequest: new FormControl({value: true, disabled: false}),
    specialRequest: new FormGroup({
      charge: new FormControl({value: true, disabled: false}),
      comment: new FormControl('')
    })
  });

  ngOnInit(): void {
    if (this.form.controls.isSpecialRequest.value) this.matExpansionPanel.open();
    this.isSpecialRequest$ = this.form.controls.isSpecialRequest.valueChanges.subscribe(val => {
      if (val) {
        this.form.controls.specialRequest.enable();
        this.matExpansionPanel.open();
      } else {
        this.form.controls.specialRequest.disable();
        this.matExpansionPanel.close();
      }
    });
  }

  ngOnDestroy(): void {
    if (this.isSpecialRequest$) {
      this.isSpecialRequest$.unsubscribe();
    }
  }
}
