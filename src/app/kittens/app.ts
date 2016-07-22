import { CatNameComponent } from './../cat-name/cat-name';

let template = `
                <cdl-carousel-title></cdl-carousel-title>
                <cdl-kittens-carousel></cdl-kittens-carousel>
                <cdl-cat-name></cdl-cat-name>
                `;

let appComponent = {
  template: template,
  controller: AppController,
  bindings: {}
}
module.exports = angular
  .module('cdl-kittens', [])
  .component('cdlCatName', CatNameComponent)
  .component('cdlApp', appComponent);


AppController.$inject = [];
function AppController() {}
