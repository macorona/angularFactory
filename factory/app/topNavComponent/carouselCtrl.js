(function () {
      'use strict';

      angular
        .module('myApp')
        .component('carouselComponent', {
            templateUrl: 'app/topNavComponent/topCarousel.html',
            controller: carouselCtrl,
            controllerAs: 'vm'

        });

      function carouselCtrl() {
         var vm = this;
         $('.carousel').carousel();
      }

})();
