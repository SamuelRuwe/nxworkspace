import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@nx-workspace/material';
import { CardWrapperComponent } from './templates/card-wrapper.component';
import { CardRefreshWrapperComponent } from './wrappers/refresh-wrapper/card-refresh-wrapper.component';
import { DataProviderComponent } from './wrappers/widgets/data-provider/data-provider.component';

@NgModule({
  declarations: [
    CardWrapperComponent,
    CardRefreshWrapperComponent,
    DataProviderComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    CardWrapperComponent,
    CardRefreshWrapperComponent,
    DataProviderComponent
  ]
})

export class CardModule {}
