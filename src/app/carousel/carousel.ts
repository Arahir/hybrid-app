import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'cdl-carousel',
  templateUrl: 'carousel.html',
})
export class CarouselComponent {
  @Input() data: string[];

  constructor() {}
}
