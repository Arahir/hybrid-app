import { AsyncPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { runEffects } from '@ngrx/effects';
import { Store, provideStore } from '@ngrx/store';

import { KittensEffects } from './effects/kittens';
import { states } from './states';

import { CarouselComponent } from './../carousel/carousel';

@Component({
  selector: 'cdl-kittens-carousel',
  templateUrl: 'kittens-carousel.html',
  directives: [ CarouselComponent ]
})
export class KittensCarouselComponent implements OnInit{
  public kittensModel;

  constructor(private _store: Store<any>) {
    this.kittensModel = this._store.select('kittens');
  }

  ngOnInit() {
    this._store.dispatch({type: 'LOAD_KITTENS', payload: {}})
  }
}

export const KITTENS_PROVIDERS = [
  provideStore(states),
  runEffects(KittensEffects)
];
