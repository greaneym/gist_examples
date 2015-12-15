(function () {
  'use strict';

  // create the angular app
  angular.module('waveApp', [
    'waveApp.controllers',
    'waveApp.directives'
    ]);

  // setup dependency injection
  angular.module('d3', []);
  angular.module('waveApp.controllers', []);
  angular.module('waveApp.directives', ['d3']);

}());
