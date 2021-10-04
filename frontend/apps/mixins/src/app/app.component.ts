import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';

const mixinHidden = (base: any) => {
  return class extends base {
    public setHidden(renderer: any, el: any) {
      renderer.setAttribute(el.nativeElement, 'hidden', 'true');
    }
  }
}

class BoilerPlateClass {
  public info(msg: string) {
    console.log(msg);
  }
}

@Component({
  selector: 'nx-workspace-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'mixins';
}

const WithHidden = mixinHidden(BoilerPlateClass);

@Component({
  selector: 'nx-workspace-mixin',
  template: `
    <div>
      <button (click)="hide()">Hide</button>
      <p #ref>will get hide</p></div>`,
  styleUrls: ['./app.component.css']
})
export class MixinExampleComponent extends WithHidden {
  @ViewChild('ref') ref!: ElementRef;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
    super();
  }

  hide() {
    this.setHidden(this.renderer, this.ref);
  }
}

@Component({
  selector: 'nx-workspace-mixin2',
  template: `
    <div>
      <button (click)="hide()"> hide</button>
      <div #ref>
        <ng-content></ng-content>
      </div>
    </div>`,
  styleUrls: ['./app.component.css']
})
export class AddHiddenComponent {
  @ViewChild('ref') ref!: ElementRef;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
  }

  hide() {
    this.renderer.setAttribute(this.ref.nativeElement, 'hidden', 'true');
  }
}
