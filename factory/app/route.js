(function () {
    'use strict'

    config.$inject = ['$routeProvider'];
    function config($routeProvider) {
        $routeProvider
        .when('/home', {
            template: '<landing-component></landing-component>',
            controllerAs: 'vm'

        })
        .otherwise({
            redirectTo: '/home'
        });



    }
    angular
    .module('myApp')
    .config(config);

})();
