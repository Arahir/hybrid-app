import { Component, Input } from '@angular/core';

@Component({
  selector: 'cdl-carousel',
  templateUrl: 'carousel.html',
})
export class CarouselComponent {
  @Input() data: string[];
  public current: number = 0;

  constructor() {}

  navigate(index) {
    if (index >= this.data.length ) {
      this.current = 0;
    }
    else if (index < 0) {
      this.current = this.data.length - 1;
    }
    else {
      this.current = index;
    }
  }
}
