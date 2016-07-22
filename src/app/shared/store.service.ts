import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class StoreService {
  constructor(private _store: Store<any>){}

  select(state) {
    return this._store.select(state);
  }

  dispatch(type, payload) {
    this._store.dispatch({type, payload});
  }

  combine(...statesName) {
    let states = statesName.map((stateName) => this.select(stateName));

    return Observable.combineLatest(...states);
  }
}
