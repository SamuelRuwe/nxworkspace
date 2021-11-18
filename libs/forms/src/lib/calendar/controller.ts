import { OnChanges } from '@angular/core';
import { Subject } from 'rxjs';

export abstract class Controller implements OnChanges {
  readonly change$ = new Subject<void>();

  ngOnChanges(): void {
    console.log("in on changes");
    this.change$.next();
  }

}
