import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'cdl-carousel',
  templateUrl: 'carousel.html',
})
export class CarouselComponent {
  @Input() data: string[];
  current: number;

  constructor() {
    this.current = 0;
  }

  navigate(index) {
    this.current = (index + this.data.length) % this.data.length;
  }
}
