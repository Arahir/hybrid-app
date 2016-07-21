import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';

@Injectable()
export class StoreService {
  constructor(private _store: Store<any>){}

  select(state) {
    return this._store.select(state);
  }

  dispatch(type, payload) {
    this._store.dispatch({type, payload});
  }
}
