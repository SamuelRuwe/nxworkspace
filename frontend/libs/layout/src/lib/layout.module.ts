import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { MaterialModule } from '@nx-workspace/material';
import { RouterModule } from '@angular/router';
import { CardWrapperComponent } from './card/card-wrapper.component';
import { TableComponent } from './table/table.component';
import { DynamicTableComponent } from './dynamic-table/dynamic-table.component';
import {
  CellCallbackButtonComponent, CellCallbackIconComponent,
  CellComponent,
  CellDateComponent, CellDaysComponent,
  CellIconComponent, CellOptionalIconComponent,
} from './cell/cell.component';
import { CellHostDirective } from './cell-host.directive';
import { AbstractTableComponent } from './abstract-table/abstract-table.component';
import { DaysPipe } from './days.pipe';
import { CarouselComponent } from './carousel/carousel.component';
import { CarouselItemDirective } from './carousel/carousel-item.directive';
import { CarouselItemElementDirective } from './carousel/carousel-item-element.directive';
import { CardRefreshWrapperComponent } from './card-refresh-wrapper/card-refresh-wrapper.component';
import { DataProviderComponent } from './card-refresh-wrapper/widgets/data-provider/data-provider.component';
import { ExpansionPanelsComponent } from './expansion-panels/expansion-panels.component';
import { InfoListComponent } from './info-list/info-list.component';
import { CarouselWrapperComponent } from './carousel-wrapper/carousel-wrapper.component';
import { CarouselItemComponent } from './carousel-wrapper/carousel-item/carousel-item.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule
  ],
  declarations: [
    NavbarComponent,
    CardWrapperComponent,
    TableComponent,
    DynamicTableComponent,
    CellComponent,
    CellIconComponent,
    CellHostDirective,
    CellCallbackButtonComponent,
    AbstractTableComponent,
    // CellCallbackIconComponent,
    // CellDaysComponent,
    DaysPipe,
    CarouselItemDirective,
    CarouselItemElementDirective,
    CarouselComponent,
    CardRefreshWrapperComponent,
    DataProviderComponent,
    ExpansionPanelsComponent,
    InfoListComponent,
    CarouselWrapperComponent,
    CarouselItemComponent,
    CellDateComponent,
    CellCallbackIconComponent,
    CellDaysComponent,
    CellOptionalIconComponent
  ],
  exports: [
    NavbarComponent,
    CardWrapperComponent,
    TableComponent,
    DynamicTableComponent,
    CellHostDirective,
    CarouselItemDirective,
    CarouselItemElementDirective,
    CarouselComponent,
    CardRefreshWrapperComponent,
    DataProviderComponent,
    ExpansionPanelsComponent,
    InfoListComponent
    // CellComponent,
    // CellIconComponent,
    // CellCallbackButtonComponent,
    // CellCallbackIconComponent,
    // CellDaysComponent,
  ]
})
export class LayoutModule {}
