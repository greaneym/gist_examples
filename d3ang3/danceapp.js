(function () {
  'use strict';

  // create the angular app
  angular.module('danceApp', [
    'danceApp.controllers',
    'danceApp.directives'
    ]);

  // setup dependency injection
  angular.module('d3', []);
  angular.module('danceApp.controllers', []);
  angular.module('danceApp.directives', ['d3']);

}());
