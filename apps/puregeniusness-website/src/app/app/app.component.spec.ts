import { TestBed, waitForAsync } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { RouterTestingModule } from '@angular/router/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { selectEffectiveTheme } from '../core/settings/settings.selectors';
import { MatCardModule } from '@angular/material/card';
import { MATERIAL_SANITY_CHECKS } from '@angular/material/core';

describe('AppComponent', () => {
  let store: MockStore;

  beforeEach(waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [
          RouterTestingModule,
          NoopAnimationsModule,
          MatCardModule
        ],
        providers: [
          provideMockStore(),
          { provide: MATERIAL_SANITY_CHECKS, useValue: false }
        ],
        declarations: [AppComponent]
      }).compileComponents();

      store = TestBed.inject(MockStore);
      store.overrideSelector(selectEffectiveTheme, 'default');
    })
  );

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
