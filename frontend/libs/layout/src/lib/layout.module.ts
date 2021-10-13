import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { MaterialModule } from '@nx-workspace/material';
import { RouterModule } from '@angular/router';
import { CardWrapperComponent } from './card/card-wrapper.component';
import { TableComponent } from './table/table.component';
import { DynamicTableComponent } from './dynamic-table/dynamic-table.component';
import { CellCallbackButtonComponent, CellComponent, CellIconComponent, } from './cell/cell.component';
import { CellHostDirective } from './cell-host.directive';
import { AbstractTableComponent } from './abstract-table/abstract-table.component';
import { DaysPipe } from './days.pipe';
import { CarouselComponent } from './carousel/carousel.component';
import { CarouselItemDirective } from './carousel/carousel-item.directive';
import { CarouselItemElementDirective } from './carousel/carousel-item-element.directive';
import { CardRefreshWrapperComponent } from './card-refresh-wrapper/card-refresh-wrapper.component';
import { DataProviderComponent } from './card-refresh-wrapper/widgets/data-provider/data-provider.component';
import { ExpansionPanelsComponent } from './expansion-panels/expansion-panels.component';

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
    ExpansionPanelsComponent
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
    ExpansionPanelsComponent
    // CellComponent,
    // CellIconComponent,
    // CellCallbackButtonComponent,
    // CellCallbackIconComponent,
    // CellDaysComponent,
  ]
})
export class LayoutModule {}
