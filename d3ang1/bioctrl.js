(function () {
  'use strict';

  angular.module('bcaApp.controllers')
    .controller('bcaCtrl', function($scope){
    $scope.inputs = {
      gSize: 200,
      rString: 11
    };

                     $scope.calcStyle = function(inputs){
                       inputs.style = {'Neighbor_rulestring':inputs.rString,'Grid Size':inputs.gSize} 
                    };
                        $scope.style = function(inputs) {
                        return inputs.style;
           
                   }
                        $scope.onClick = function(event) {
                        return inputs.style;
           
                   }
});

}());
