import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ExampleComponent } from './example/example.component';


/**
 * Testing
 *
 * describe: Block that groups several related tests.
 * it/test: The actual test you are running.
 *
 */


describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      /**
       * If your component has child Angular components you must declare them here
       * or you will get errors when running the test
       */
      declarations: [AppComponent, ExampleComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

});
