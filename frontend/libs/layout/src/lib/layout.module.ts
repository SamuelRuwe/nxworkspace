import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { MaterialModule } from '@nx-workspace/material';
import { RouterModule } from '@angular/router';
import { CardWrapperComponent } from './card/card-wrapper.component';
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
import { ExpansionPanelListComponent } from './lists/expansion-panel/expansion-panel-list.component';
import { TableModule } from './tables/table.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    TableModule
  ],
  declarations: [
    NavbarComponent,
    CardWrapperComponent,
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
    ExpansionPanelListComponent,
  ],
  exports: [
    NavbarComponent,
    CardWrapperComponent,
    CarouselItemDirective,
    CarouselItemElementDirective,
    CarouselComponent,
    CardRefreshWrapperComponent,
    DataProviderComponent,
    ExpansionPanelsComponent,
    InfoListComponent,
    ExpansionPanelListComponent
  ]
})
export class LayoutModule {}
