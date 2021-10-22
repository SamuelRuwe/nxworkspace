import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AddHiddenComponent, AppComponent, MixinExampleComponent } from './app.component';

@NgModule({
  declarations: [AppComponent, MixinExampleComponent, AddHiddenComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
