import {
  Component,
  ComponentFactoryResolver,
  ComponentRef,
  Inject,
  OnDestroy,
  OnInit,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DynamicDialogData } from './dynamic-dialog.interface';
import { map, take } from 'rxjs';

@Component({
  templateUrl: './dynamic-dialog.component.html',
  styleUrls: ['./dynamic-dialog.component.css']
})
export class DynamicDialogComponent<T> implements OnInit, OnDestroy {

  @ViewChild('target', {read: ViewContainerRef, static: true}) vcRef!: ViewContainerRef;

  componentRef!: ComponentRef<any>;

  constructor(private resolver: ComponentFactoryResolver,
              public dialogRef: MatDialogRef<DynamicDialogComponent<any>>,
              @Inject(MAT_DIALOG_DATA) public data: DynamicDialogData<T>) {}

  ngOnInit() {
    const factory = this.resolver.resolveComponentFactory(this.data.component);
    this.componentRef = this.vcRef.createComponent(factory);
    const instance = this.componentRef.instance;
    Object.keys(this.data)
      .filter(key => key !== 'component')
      .forEach(key => instance[key] = this.data[key]);
    instance.close$.pipe(take(1), map((evt) => this.dialogRef.close(evt))).subscribe();
  }

  ngOnDestroy() {
    if (this.componentRef) {
      this.componentRef.destroy();
    }
  }

}
