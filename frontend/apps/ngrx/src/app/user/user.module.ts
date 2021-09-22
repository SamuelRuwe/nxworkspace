import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { UserRoutingModule } from './user-routing.module';
import { MaterialModule } from '@nx-workspace/material';
import { LayoutModule } from '@nx-workspace/layout';

@NgModule({
  declarations: [UserComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    MaterialModule,
    LayoutModule
  ]
})
export class UserModule {}
