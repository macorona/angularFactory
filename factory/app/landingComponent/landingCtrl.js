(function () {
      'use strict';

      angular
        .module('myApp')
        .component('landingComponent', {
            templateUrl: 'app/landingComponent/landingComponent.html',
            controller: landingCtrl,
            controllerAs: 'vm'

        });

        landingCtrl.$inject = ['$location', 'marvelData','firebaseArray'];

        function landingCtrl($location, marvelData) {
            var vm = this;
            vm.superheros = null;

            marvelData.get()
              .$promise
                .then(function(response) {
                      vm.superheros = response.data.results;
                      console.log("vm.superheros");
                })

            $('#modal1').modal();

        }

})();
