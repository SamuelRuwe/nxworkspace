import { Component, Input } from '@angular/core';
import { CAROUSEL_ITEM_ } from './carousel-item.token';
import { CarouselItem } from './carousel-item.interface';

@Component({
  selector: 'pg-layout-carousel-item',
  templateUrl: './carousel-item.component.html',
  styleUrls: ['./carousel-item.component.css'],
  providers: [
    {provide: CAROUSEL_ITEM_, useClass: CarouselItemComponent}
  ]
})
export class CarouselItemComponent implements CarouselItem {

  @Input() title!: string;

  onClose(): void {
  }

  onLoad(): void {
  }

}
