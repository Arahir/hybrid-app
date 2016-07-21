import { Observable } from 'rxjs/Observable';

export const CatNameComponent = {
    template: '<p>{{ $ctrl.current }}</p>',
    controller: CatNameController,
    bindings: {}
  };

CatNameController.$inject = ['store'];
function CatNameController(store) {
  let $ctrl = this;
  $ctrl.kittens = [];
  $ctrl.current = 0;
  store.select('kittens').subscribe((val) => {
    $ctrl.kittens = val;
  });
  store.select('currentKitty').subscribe((index) => {
    $ctrl.current = index;
  })



}
