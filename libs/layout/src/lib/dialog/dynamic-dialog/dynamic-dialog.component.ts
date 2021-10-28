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
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DynamicDialogData } from './dynamic-dialog.interface';

@Component({
  templateUrl: './dynamic-dialog.component.html',
  styleUrls: ['./dynamic-dialog.component.css']
})
export class DynamicDialogComponent<T> implements OnInit, OnDestroy {

  @ViewChild('target', {read: ViewContainerRef, static: true}) vcRef!: ViewContainerRef;

  componentRef!: ComponentRef<any>;

  constructor(private resolver: ComponentFactoryResolver,
              @Inject(MAT_DIALOG_DATA) public data: DynamicDialogData<T>) {}

  ngOnInit() {
    const factory = this.resolver.resolveComponentFactory(this.data.component);
    this.componentRef = this.vcRef.createComponent(factory);
    const instance = this.componentRef.instance;
    Object.keys(this.data)
      .filter(key => key !== 'component')
      .forEach(key => instance[key] = this.data[key]);
  }

  ngOnDestroy() {
    if (this.componentRef) {
      this.componentRef.destroy();
    }
  }

}
