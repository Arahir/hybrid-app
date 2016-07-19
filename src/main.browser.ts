import {LocationStrategy, HashLocationStrategy} from '@angular/common';
import {bootstrap} from '@angular/platform-browser-dynamic';
import {HTTP_PROVIDERS} from '@angular/http';
// import {enableProdMode} from '@angular/core';

import {APP_ROUTER_PROVIDERS} from './app/app.routes';
import {App} from './app/app';

import { UpgradeAdapter } from '@angular/upgrade';
import * as angular from '@angular/upgrade/src/angular_js';
import 'kittensApp';

console.log(angular)

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

upgradeAdapter.bootstrap(document.body, ['cl-kitten']);
