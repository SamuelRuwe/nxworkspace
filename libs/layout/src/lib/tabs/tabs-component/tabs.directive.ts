import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[tabsHost]',
})

export class TabsDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}