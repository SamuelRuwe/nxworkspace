import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { StoreModule } from '@ngrx/store';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@nx-workspace/layout';
import { AppRoutingModule } from './app-routing.module';
import { reducers } from './state';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  declarations: [AppComponent],
  imports: [
    AppRoutingModule,
    BrowserModule,
    // Take all of the reducers and make them globally available
    StoreModule.forRoot(reducers),
    // Allows us to know state of application at any given time
    StoreDevtoolsModule.instrument({maxAge: 10}),
    // Stores all effects in the application
    EffectsModule.forRoot(),
    HttpClientModule,
    BrowserAnimationsModule,
    LayoutModule
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
