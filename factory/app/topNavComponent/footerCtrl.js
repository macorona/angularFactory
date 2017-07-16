(function () {
      'use strict';

      angular
        .module('myApp')
        .component('footerComponent', {
            templateUrl: 'app/topNavComponent/footer.html',
            controller: footerCtrl,
            controllerAs: 'vm'

        });

      function footerCtrl() {
         var vm = this;
         
      }

})();
