import { Component } from '@angular/core';

@Component({
  selector: 'cdl-carousel',
  templateUrl: 'carousel.html',
})
export class CarouselComponent {
  public currentKitten: number = 0;
  public kittens: string[] = [
    "https://pbs.twimg.com/profile_images/619573624903761920/EGZ2I6wG.jpg",
    "https://static-s.aa-cdn.net/img/gp/20600002144900/QcM5ze2mGK0frV4cbdL7otLHts8p_RoC-N2mggz7M6Jv36vZN3B9Y3OmFvJwwLHuUyDc=w300?v=1",
    "https://pbs.twimg.com/profile_images/632658152505364480/txMFRoCf.jpg"
  ];
  constructor() {  }

  changeKitten(index) {
    if (index >= this.kittens.length ) {
      this.currentKitten = 0;
    }
    else if (index < 0) {
      this.currentKitten = this.kittens.length - 1;
    }
    else {
      this.currentKitten = index;
    }
  }
}
