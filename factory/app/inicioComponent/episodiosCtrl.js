(function () {
      'use strict';

      angular
        .module('myApp')
        .component('episodiosComponent', {
            templateUrl: 'app/inicioComponent/episodiosComponent.html',
            controller: episodiosCtrl,
            controllerAs: 'vm'

        });

      function episodiosCtrl() {
         $('.collapsible').collapsible();

      }

})();
