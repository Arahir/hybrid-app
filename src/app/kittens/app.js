let template = `<button ng-click="$ctrl.changeKitten($ctrl.currentKitten - 1)">
                  <
                </button>
                <img src="{{$ctrl.kittens[$ctrl.currentKitten]}}"></img>
                <button ng-click="$ctrl.changeKitten($ctrl.currentKitten + 1)">
                  >
                </button>`;

let carouselComponent = {
  template: template,
  controller: CarouselController,
  bindings: {}
}
module.exports = angular
  .module('cl-kitten', [])
  .component('clCarousel', carouselComponent);


CarouselController.$inject = [];
function CarouselController() {
  var $ctrl = this;
  $ctrl.kittens = [
    "https://pbs.twimg.com/profile_images/619573624903761920/EGZ2I6wG.jpg",
    "http://wallpaper.sc/en/ipad/wp-content/uploads/2014/10/ipad-2048x2048-thumbnail_00754-256x256.jpg",
    "https://pbs.twimg.com/profile_images/632658152505364480/txMFRoCf.jpg"
  ];
  $ctrl.currentKitten = 0;
  $ctrl.changeKitten = function (index) {
    if (index >= $ctrl.kittens.length ) {
      $ctrl.currentKitten = 0;
    }
    else if (index < 0) {
      $ctrl.currentKitten = vm.kittens.length - 1;
    }
    else {
      $ctrl.currentKitten = index;
    }
  };
}
