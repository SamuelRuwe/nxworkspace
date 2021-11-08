import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[pgHighlight]'
})
export class HighlightDirective {

  @Input() set color(color: string | null) {
    if (!color) return;
    this.el.nativeElement.style.backgroundColor = color;
  }

  constructor(private el: ElementRef) {}

}
