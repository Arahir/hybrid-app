import { Injectable } from '@angular/core';
import { Effect, StateUpdates } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

const KITTENS: string[] = [
  "https://pbs.twimg.com/profile_images/619573624903761920/EGZ2I6wG.jpg",
  "https://static-s.aa-cdn.net/img/gp/20600002144900/QcM5ze2mGK0frV4cbdL7otLHts8p_RoC-N2mggz7M6Jv36vZN3B9Y3OmFvJwwLHuUyDc=w300?v=1",
  "https://pbs.twimg.com/profile_images/632658152505364480/txMFRoCf.jpg"
];

@Injectable()
export class KittensEffects {
  @Effect() loadKittens$ = this.updates$
    .whenAction('LOAD_KITTENS')
    .map(update => (update.action.payload))
    .mergeMap(params => {
      return Observable.of({type: 'KITTENS_LOADED', payload: KITTENS});
    })

    constructor(private updates$: StateUpdates<any>) { }
};
