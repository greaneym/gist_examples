(function () {
  'use strict';
  angular.module('danceApp.controllers')
    .controller('danceCtrl', function($scope){
    $scope.inputs = {
      speed: 0,
    };
        $scope.calcStyle = function(inputs){
                       inputs.style = {'Transition Speed':inputs.speed} 
                    };
        $scope.style = function(inputs) {
                        return inputs.style;
           
                   }
         $scope.onClick = function(event) {
                        return inputs.style;
           
                   }
});
    

}());
