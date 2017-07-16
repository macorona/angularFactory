(function () {
    'use strict';

    var modulo = angular.module('myApp', ['ngResource','ngRoute'])
    modulo.config(function() {
      var config = {
          apiKey: "AIzaSyB5BcjQodbQrnxw9b4Q2piWwQ4SgbIeeQY",
          authDomain: "angularfirebase-2cf5e.firebaseapp.com",
          databaseURL: "https://angularfirebase-2cf5e.firebaseio.com"
      };
      firebase.initializeApp(config);
    });
})();
