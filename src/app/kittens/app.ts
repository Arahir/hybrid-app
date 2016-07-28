import { CatNameComponent } from './../cat-name/cat-name';

let template = `
                <cdl-kittens-carousel></cdl-kittens-carousel>
                `;

let appComponent = {
  template: template,
  controller: AppController,
  bindings: {}
}
module.exports = angular
  .module('cdl-kittens', ['ui.router'])
  .component('cdlCatName', CatNameComponent)
  .component('cdlApp', appComponent)
  .controller('AppController', AppController)
  .config(function($stateProvider, $urlRouterProvider, $locationProvider) {
    $stateProvider
      .state('home', {
        template: "<cdl-app></cdl-app>",
        url: '/'
      });
      $locationProvider.html5Mode(true);
      $urlRouterProvider.when('', '/') ;
});


AppController.$inject = [];
function AppController() {}
