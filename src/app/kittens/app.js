let template = `
                <cdl-carousel-title></cdl-carousel-title>
                <cdl-kittens-carousel></cdl-kittens-carousel>
                `;

let appComponent = {
  template: template,
  controller: AppController,
  bindings: {}
}
module.exports = angular
  .module('cdl-kittens', [])
  .component('cdlApp', appComponent);


AppController.$inject = [];
function AppController() {}
