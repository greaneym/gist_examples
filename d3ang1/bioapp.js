(function () {
  'use strict';

  // create the angular app
  angular.module('bcaApp', [
    'bcaApp.controllers',
    'bcaApp.directives'
    ]);

  // setup dependency injection
  angular.module('d3', []);
  angular.module('bcaApp.controllers', []);
  angular.module('bcaApp.directives', ['d3']);


}());
