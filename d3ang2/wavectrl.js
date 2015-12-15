(function () {
  'use strict';
  angular.module('waveApp.controllers')
    .controller('waveCtrl', function($scope){
    $scope.inputs = {
      dotRadius: 8,
      ringRadius: 10
    };
        $scope.calcStyle = function(inputs){
                       inputs.style = {'Dot Radius':inputs.dotRadius,'Ring Radius':inputs.ringRadius} 
                    };
        $scope.style = function(inputs) {
                        return inputs.style;
           
                   }
         $scope.onClick = function(event) {
                        return inputs.style;
           
                   }
});
    

}());
