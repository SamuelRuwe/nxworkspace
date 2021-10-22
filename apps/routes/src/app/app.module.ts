import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from '@nx-workspace/material';
import { LayoutModule } from '@nx-workspace/layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { ContentProjectComponent } from './content-project/content-project.component';

@NgModule({
  declarations: [AppComponent, UsersComponent, ContentProjectComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        MaterialModule,
        LayoutModule,
        BrowserAnimationsModule,
        ReactiveFormsModule
    ],
  bootstrap: [AppComponent],
})
export class AppModule {}
