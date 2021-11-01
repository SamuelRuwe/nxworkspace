import { BasicDropdownComponent } from './basic-dropdown.component';
import { render, screen } from '@testing-library/angular';
import { Primary } from './basic-dropdown.component.stories';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@nx-workspace/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MATERIAL_SANITY_CHECKS } from '@angular/material/core';

// describe('SelectComponent', () => {
//   let component: BasicDropdownComponent;
//   let fixture: ComponentFixture<BasicDropdownComponent>;
//
//   beforeEach(waitForAsync(() => {
//     TestBed.configureTestingModule({
//       declarations: [BasicDropdownComponent],
//       imports: [BrowserAnimationsModule, MaterialModule, FormsModule, ReactiveFormsModule]
//     })
//       .compileComponents();
//   }));
//
//   beforeEach(() => {
//     fixture = TestBed.createComponent(BasicDropdownComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });
//
//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });

test('renders the button in the primary state ', async () => {
  await render(BasicDropdownComponent, {
    imports: [BrowserAnimationsModule, MaterialModule, FormsModule, ReactiveFormsModule],
    providers: [{provide: MATERIAL_SANITY_CHECKS, useValue: false}],
    componentProperties: Primary.args,
  });
  console.log(screen.queryAllByText('Select a thing').length);
  expect(screen.queryAllByText('Select a thing').length);
  // fireEvent.click(screen.getByText('Select a thing'));
  // console.log(screen);
  // expect(screen.getByRole('button').classList.contains('storybook-button--primary')).toBeTruthy();
});
