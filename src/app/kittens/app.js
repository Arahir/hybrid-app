let template = `
                <cdl-carousel-title></cdl-carousel-title>
                <cdl-carousel></cdl-carousel>
                `;

let carouselComponent = {
  template: template,
  controller: CarouselController,
  bindings: {}
}
module.exports = angular
  .module('cl-kitten', [])
  .component('cdlKittensCarousel', carouselComponent);


CarouselController.$inject = [];
function CarouselController() {}
