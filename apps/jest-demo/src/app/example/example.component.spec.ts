import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleComponent } from './example.component';
import { By } from '@angular/platform-browser';
import { ExampleService } from '../example.service';

describe('ExampleComponent', () => {
  let component: ExampleComponent;
  let fixture: ComponentFixture<ExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExampleComponent],
      providers: [{
        provide: ExampleService,
        useValue: {getData: () => [1, 2, 3]}
      }]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('dom elements', () => {
    it('should have no data in the h1 on creation', () => {
      const h1 = fixture.debugElement.query(By.css('h1')).nativeElement;
      component.input = 'test';
      fixture.detectChanges();
      expect(h1.textContent).toEqual('test');
    });
  });

  /**
   * Test with mocked provider
   */
  test('provider example', () => {
    const result = component.getDataFromService();
    expect(result.length).toEqual(3);
  });

});

/**
 * Running tests without Angular test helpers
 *
 * All the classes in Angular are just objects.
 */
test('no angular setup', () => {
  const component = new ExampleComponent({getData: () => []});
  const result = component.getDataFromService();
  expect(result).toEqual([]);
});
