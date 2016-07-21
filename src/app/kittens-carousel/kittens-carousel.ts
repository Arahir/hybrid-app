import { AsyncPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { runEffects } from '@ngrx/effects';
import { Store, provideStore } from '@ngrx/store';

import { KittensEffects } from './effects/kittens';
import { states } from './states';

import { CarouselComponent } from './../carousel/carousel';

import { Kitty } from './models/kitty';

@Component({
  selector: 'cdl-kittens-carousel',
  templateUrl: 'kittens-carousel.html',
  directives: [ CarouselComponent ]
})
export class KittensCarouselComponent implements OnInit{
  public kittensModel;
  public currentKittyModel;

  constructor(private _store: Store<any>) {
    this.kittensModel = this._store.select('kittens').map((kittens: Kitty[]) => {
      return kittens.map((kitty) => kitty.photo)
    });
    this.currentKittyModel = this._store.select('currentKitty');
  }

  ngOnInit() {
    this._store.dispatch({type: 'LOAD_KITTENS', payload: {}})
  }

  carouselNavigation(index){
    this._store.dispatch({type: 'CHANGE_KITTY', payload: {index}})
  }


}

export const KITTENS_PROVIDERS = [
  provideStore(states),
  runEffects(KittensEffects)
];
