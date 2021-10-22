import { ComponentFactory, ComponentFactoryResolver, Directive, Input, OnInit, ViewContainerRef } from '@angular/core';
import { Cell } from './cell';

@Directive({
  selector: '[cell]'
})
export class CellHostDirective<T> implements OnInit {

  private factory!: ComponentFactory<any>;
  @Input() cell!: Cell<T>;

  constructor(public viewContainerRef: ViewContainerRef, private resolver: ComponentFactoryResolver) {}

  ngOnInit(): void {
    this.factory = this.resolver.resolveComponentFactory(this.cell.component);
    const componentRef = this.viewContainerRef.createComponent(this.factory);
    componentRef.instance.data = this.cell.data;
  }

}
