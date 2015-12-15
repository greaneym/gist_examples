//modification of biovisualize’s block #5496517 May 1, 2013, using angularjs
(function () {
  'use strict';

  angular.module('waveApp.directives')
    .directive('waveTest', ['d3', function(d3) {
      return {
        controller: 'waveCtrl',
        restrict: 'E',
        scope: {
          data: "=",
          inputs: "@",
          rrInputs: "@input2",
          onClick: "&"
        },
        link: function(scope, iElement, iAttrs) {

var canvas = d3.select(iElement[0])
          .append("canvas")
              .attr("width", "100%");

 // on window resize, re-render d3 canvas
          window.onresize = function() {
            return scope.$apply();
    };

          scope.$watch(function(){
              return angular.element(window)[0].innerWidth;
            }, function(){
              return scope.render(scope.inputs);
            });

          // watch for changes and re-render
          scope.$watch('inputs', function(newVals, oldVals) {
            return scope.render(newVals);
          }, true);

          scope.$watch('rrInputs', function(newVals, oldVals) {
           return scope.render(newVals);
         });

//console.log("scope.inputs", scope.inputs);
          // define render function
          scope.render = function(inputs){

            // remove all previous items before render

           d3.selectAll("canvas")
                .on("click", function(){
                d3.timer.timer(0);
               });

//console.log("scope.inputs", scope.inputs);
//console.log("rrInputs", scope.rrInputs);

// here is the Bostock d3.js wave code, with modifications

//console.log("inside update scope.inputs", scope.inputs);
//console.log("inside update rrInputs", scope.rrInputs);


$("#redraw").on("click", function(){

$(document).ready(function () {

var temp = Math.min(scope.rrInputs);

//console.log("inside update temp", temp);
//console.log("inside update typeof temp", typeof(temp));

var canvasBack = document.getElementById("canvas-back"),
    canvasFront = document.getElementById("canvas-front");
var ringRadius = temp;
var width = canvasBack.width,
    height = canvasBack.height,
    ringSeparation = 2.1 * ringRadius,
    dotRadius = 2,
    dotRadius = 2.3,
    n = (width + ringRadius) / ringSeparation,
    m = (height + ringRadius) / ringSeparation;

var contextBack,
    contextFront,
    scale = window.devicePixelRatio;

if (scale > 1) {
  canvasFront.style.width = canvasBack.style.width = width + "px";
  canvasFront.style.height = canvasBack.style.height = height + "px";
  canvasFront.width = canvasBack.width = width * scale;
  canvasFront.height = canvasBack.height = height * scale;
  contextBack = canvasBack.getContext("2d");
  contextBack = canvasBack.getContext("2d");
  contextFront = canvasFront.getContext("2d");
  contextBack.scale(scale, scale);
  contextFront.scale(scale, scale);
  //contextFront.strokeStyle = "#aaa";
} else {
  contextBack = canvasBack.getContext("2d");
  contextFront = canvasFront.getContext("2d");
}

//contextBack.strokeStyle = "#999";
//contextBack.strokeStyle = "#003";
//contextBack.strokeStyle = "#009";
//contextBack.strokeStyle = "#ddd"; //gray background
contextBack.strokeStyle = "#fff"; //opaque background
for (var i = -1; i < n; ++i) {
  for (var j = -1; j < m; ++j) {
    contextBack.beginPath();
    contextBack.arc(i * ringSeparation, j * ringSeparation, ringRadius, 0, 2 * Math.PI);
    contextBack.stroke();
  }
}

d3_timer.timer(function(elapsed) {
  contextFront.clearRect(0, 0, width, height);
  for (var i = -1; i < n; ++i) {
    for (var j = -1; j < m; ++j) {
      contextFront.save();
      contextFront.beginPath();
      contextFront.translate(i * ringSeparation, j * ringSeparation);
      contextFront.rotate((i + j) / 6 + elapsed / 200);
    //  contextFront.rotate((i + j) / 6 + elapsed / 1000);
      //contextFront.arc(ringRadius, 0, dotRadius, 0, 2 * Math.PI);
      contextFront.arc(ringRadius, 0, dotRadius, 0, 20 * Math.PI);
      contextFront.fillStyle = 'rgb(0,0,255)';
      contextFront.fill();
      //contextFront.fill("#aaa");
      contextFront.restore();
    }
  }
});
        });
});// end document ready function

}; //end click redraw

// these close up the directive
        }
      };
    }]);
}());

