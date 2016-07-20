import { AsyncPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { runEffects } from '@ngrx/effects';
import { Store, provideStore } from '@ngrx/store';

import { KittensEffects } from './effects/kittens';
import { states } from './states';

@Component({
  selector: 'cdl-carousel',
  templateUrl: 'carousel.html',
})
export class CarouselComponent implements OnInit{
  public currentKitten: number = 0;
  public kittens: string[] = [
    "https://pbs.twimg.com/profile_images/619573624903761920/EGZ2I6wG.jpg",
    "https://static-s.aa-cdn.net/img/gp/20600002144900/QcM5ze2mGK0frV4cbdL7otLHts8p_RoC-N2mggz7M6Jv36vZN3B9Y3OmFvJwwLHuUyDc=w300?v=1",
    "https://pbs.twimg.com/profile_images/632658152505364480/txMFRoCf.jpg"
  ];
  public kittensModel;

  constructor(private _store: Store<any>) {
    this.kittensModel = this._store.select('kittens');
  }

  ngOnInit() {
    this._store.dispatch({type: 'LOAD_KITTENS', payload: {}})
  }

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

export const KITTENS_PROVIDERS = [
  provideStore(states),
  runEffects(KittensEffects)
];
