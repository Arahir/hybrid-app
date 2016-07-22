export const CatNameComponent = {
    template: '<p ng-click="$ctrl.next()">{{ $ctrl.kittens[$ctrl.current].name }}</p>',
    controller: CatNameController,
    bindings: {}
  };

CatNameController.$inject = ['store'];
function CatNameController(store) {
  let $ctrl = this;
  $ctrl.kittens = [];
  $ctrl.current = 0;
  $ctrl.next = nextKitty;

  store
    .combine('kittens', 'currentKitty')
    .let((state) => {
      return state.map(([kittens, currentKitty]) => {
        return {
          kittens,
          currentKitty
        }
      })
    })
    .subscribe((val) => {
      $ctrl.current = val.currentKitty;
      $ctrl.kittens = val.kittens;
    });

  function nextKitty() {
    let current = ($ctrl.current + 1) % $ctrl.kittens.length ;
    store.dispatch('CHANGE_KITTY', {index: current})
  }



}
