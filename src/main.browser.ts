import {LocationStrategy, HashLocationStrategy} from '@angular/common';
import {bootstrap} from '@angular/platform-browser-dynamic';
import {HTTP_PROVIDERS} from '@angular/http';
// import {enableProdMode} from '@angular/core';

import { UpgradeAdapter } from '@angular/upgrade';
import * as angular from '@angular/upgrade/src/angular_js';
import 'kittensApp';
import { CarouselTitle } from './app/carousel-title/carousel-title';
import { CarouselComponent } from './app/carousel/carousel';

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

angular.module('cl-kitten')
  .directive('cdlCarouselTitle',
             upgradeAdapter.downgradeNg2Component(CarouselTitle))
  .directive('cdlCarousel',
             upgradeAdapter.downgradeNg2Component(CarouselComponent));

upgradeAdapter.bootstrap(document.body, ['cl-kitten']);
