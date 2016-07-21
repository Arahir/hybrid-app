import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'cdl-carousel',
  templateUrl: 'carousel.html',
})
export class CarouselComponent {
  @Input() data: string[];
  @Input() current: number;
  @Output() navigation = new EventEmitter();

  constructor() {}

  navigate(index) {
    let current;
    if (index >= this.data.length ) {
      current = 0;
    }
    else if (index < 0) {
      current = this.data.length - 1;
    }
    else {
      current = index;
    }

    this.navigation.emit(current);
  }
}
