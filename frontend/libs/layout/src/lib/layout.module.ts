import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { MaterialModule } from '@nx-workspace/material';
import { RouterModule } from '@angular/router';
import { CarouselComponent } from './carousel/carousel.component';
import { CarouselItemDirective } from './carousel/carousel-item.directive';
import { CarouselItemElementDirective } from './carousel/carousel-item-element.directive';
import { ExpansionPanelsComponent } from './expansion-panels/expansion-panels.component';
import { CarouselWrapperComponent } from './carousel-wrapper/carousel-wrapper.component';
import { CarouselItemComponent } from './carousel-wrapper/carousel-item/carousel-item.component';
import { TableModule } from './tables/table.module';
import { ListModule } from './lists/list.module';
import { CardModule } from './cards/card.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    TableModule,
    ListModule,
    CardModule
  ],
  declarations: [
    NavbarComponent,
    CarouselItemDirective,
    CarouselItemElementDirective,
    CarouselComponent,
    ExpansionPanelsComponent,
    CarouselWrapperComponent,
    CarouselItemComponent,
  ],
  exports: [
    NavbarComponent,
    CarouselItemDirective,
    CarouselItemElementDirective,
    CarouselComponent,
    ExpansionPanelsComponent,
    TableModule,
    ListModule,
    CardModule
  ]
})
export class LayoutModule {}
