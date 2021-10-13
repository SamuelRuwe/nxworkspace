import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[pgLayoutCarouselItem]'
})
export class CarouselItemDirective {

  constructor(public tpl: TemplateRef<void>) {}

}
