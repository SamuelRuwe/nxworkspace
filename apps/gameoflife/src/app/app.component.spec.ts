import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { RouterTestingModule } from '@angular/router/testing';
import { BoardComponent } from './board/board.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { HarnessLoader } from '@angular/cdk/testing';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let loader: HarnessLoader;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, MatGridListModule],
      declarations: [AppComponent, BoardComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    loader = TestbedHarnessEnvironment.loader(fixture);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  test('reset should call reset on board component', () => {
    jest.spyOn(component.boardComponent, 'reset');
    component.reset();
    expect(component.boardComponent.reset).toHaveBeenCalled();
  });

  test('nextCycle should call nextCycle on board component', () => {
    jest.spyOn(component.boardComponent, 'nextCycle');
    component.nextCycle();
    expect(component.boardComponent.nextCycle).toHaveBeenCalled();
  });

});
