import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { reducers } from './core.state';
import { metaReducers } from './meta-reducers/debug.reducer';

@NgModule({
  declarations: [],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    StoreModule.forRoot(reducers, { metaReducers })
  ]
})
export class CoreModule {}
