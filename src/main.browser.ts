import {LocationStrategy, HashLocationStrategy} from '@angular/common';
import {bootstrap} from '@angular/platform-browser-dynamic';
import {HTTP_PROVIDERS} from '@angular/http';
// import {enableProdMode} from '@angular/core';

import { UpgradeAdapter } from '@angular/upgrade';
import * as angular from '@angular/upgrade/src/angular_js';
import 'kittensApp';
import { CarouselTitle } from './app/carousel-title/carousel-title';
import { KittensCarouselComponent, KITTENS_PROVIDERS } from './app/kittens-carousel/kittens-carousel';

import { StoreService } from './app/shared/store.service';

// enableProdMode()

// bootstrap(App, [
//   HTTP_PROVIDERS,
//   APP_ROUTER_PROVIDERS,
//   { provide: LocationStrategy, useClass: HashLocationStrategy }
// ])
// .catch(err => console.error(err));
/*
 * Create our upgradeAdapter
 */
const upgradeAdapter: UpgradeAdapter = new UpgradeAdapter();

upgradeAdapter.addProvider(KITTENS_PROVIDERS);
upgradeAdapter.addProvider(StoreService);

angular.module('cdl-kittens')
  .directive('cdlCarouselTitle',
             upgradeAdapter.downgradeNg2Component(CarouselTitle))
  .directive('cdlKittensCarousel',
             upgradeAdapter.downgradeNg2Component(KittensCarouselComponent))
  .factory('store',
            upgradeAdapter.downgradeNg2Provider(StoreService));

upgradeAdapter.bootstrap(document.body, ['cdl-kittens']);
