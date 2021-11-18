import { Directive } from '@angular/core';
import { Controller } from './controller';

@Directive({
  selector: '[pgVal]'
})
export class MaskDateDirective extends Controller {

  constructor() {
    super();
    console.log('initializing');
  }

}
