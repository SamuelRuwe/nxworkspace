import { Meta, moduleMetadata } from '@storybook/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@nx-workspace/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CalendarComponent } from './calendar.component';
import { MatNativeDateModule, MAT_DATE_FORMATS } from '@angular/material/core';
// import { InputMaskModule } from '@ngneat/input-mask';
import { NgxMaskModule } from 'ngx-mask';


export default {
    title: 'Calendar',
    component: CalendarComponent,
    decorators: [
        moduleMetadata({
            imports: [
                BrowserAnimationsModule,
                MaterialModule,
                FormsModule,
                ReactiveFormsModule,
                MatNativeDateModule,
                // InputMaskModule
                NgxMaskModule.forRoot()
            ],
            // providers: [
            //     {
            //         provide: MAT_DATE_FORMATS,
            //         useValue: {
            //             parse: {
            //                 dateInput: ['l', 'LL']
            //             },
            //             display: {
            //                 dateInput: 'L',
            //                 monthYearLabel: 'MMM YYYY',
            //                 dateA11yLabel: 'LL',
            //                 monthYearA11yLabel: 'MMMM YYYY'
            //             }
            //         }
            //     }
            // ]
        })
    ],
} as Meta<CalendarComponent>;

export const Primary = () => ({});