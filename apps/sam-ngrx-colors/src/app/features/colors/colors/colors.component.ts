import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../../core/core.state';
import { actionColorNextColor } from '../../../core/colors/colors.actions';
import { Observable } from 'rxjs';
import { selectCurrentColor } from '../../../core/colors/colors.selectors';

@Component({
  selector: 'nx-workspace-colors',
  templateUrl: './colors.component.html',
  styleUrls: ['./colors.component.css']
})
export class ColorsComponent implements OnInit {

  color$!: Observable<string>;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.color$ = this.store.select(selectCurrentColor);
  }

  nextColor() {
    this.store.dispatch(actionColorNextColor());
  }

}
