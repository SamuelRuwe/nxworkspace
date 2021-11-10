import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { StoreModule } from '@ngrx/store';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@nx-workspace/layout';
import { AppRoutingModule } from './app-routing.module';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { effects, reducers } from './state';
import { UserDialogComponent } from './user-dialog/user-dialog.component';
import { MaterialModule } from '@nx-workspace/material';
import { ReactiveFormsModule } from '@angular/forms';
import { metaReducers } from './meta-reducers/meta-reducer';
import { TablesModule } from '@puregeniusness/pg-layout/tables';

@NgModule({
  declarations: [AppComponent, UserDialogComponent],
  imports: [
    AppRoutingModule,
    BrowserModule,
    /**
     * Take all of the reducers and make them globally available.
     * The store extends Observable which allows us to get access to RxJs operators.
     * Store API
     * Mainly two methods used: Select (for querying for state) and Dispatch (for handling commands)
     */
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot(effects),
    StoreDevtoolsModule.instrument({ maxAge: 10 }),
    HttpClientModule,
    BrowserAnimationsModule,
    LayoutModule,
    MaterialModule,
    ReactiveFormsModule,
    TablesModule
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
