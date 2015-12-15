//greaneym’s block #5496517 December, 2015, D3 Dance with Austen and AngularJS
(function () {
  'use strict';

  angular.module('danceApp.directives')
    .directive('danceTest', ['d3', function(d3) {
      return {
        controller: 'danceCtrl',
        restrict: 'E',
        scope: {
          inputs: "@",
          sInput: "@input2",
          onClick: "&"
        },
        link: function(scope, iElement, iAttrs) {

var svg = d3.select(iElement[0])
          .append("svg")
              .attr("width", "100%");

var svgContainer = d3.select("#container").append("svg")
	.attr("width", 550)
	.attr("height", 550);
							
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

          scope.$watch('sInput', function(newVals, oldVals) {
           return scope.render(newVals);
         });

//console.log("scope.inputs", scope.inputs);
          // define render function
          scope.render = function(inputs){

            // remove all previous items before render
             d3.selectAll("svg").remove()
                update();
               };

//console.log("scope.inputs", scope.inputs);
//console.log("sInput", scope.sInput);

// here is the d3.js dance code

//console.log("inside update scope.inputs", scope.inputs);
//console.log("inside update sInput", scope.sInput);


function update() {

var temp = Math.min(scope.sInput);

//console.log("inside update temp", temp);
var duration_speed = 0;
var duration_speed = temp;							
      var dancers = [
        { "name": "Elizabeth", "class": "Bennett", "color":"red", "x": 200, "y":300, "radius":25 }, 
        { "name": "Willoughby", "class": "Willoughby","color":"yellow", "x": 500, "y":300,"radius":25 }, 
        { "name": "Elinor", "class": "Dashwood","color":"blue", "x":200, "y":400,"radius":25 }, 
        { "name":"Darcy", "class": "Darcy","color":"green", "x":500 , "y":400,"radius":25 }];


//console.log("data",dancers);

var width = 550,
    height = 550;

var svgContainer = d3.select("#container").append("svg")
       .attr("width", width)
       .attr("height",height);

//We add the SVG Group Element Transform Here
var circleGroup = svgContainer.append("g")
                .attr("transform", "translate(0,0)");

//var circles = svgContainer.selectAll("circle")
var circles = circleGroup.selectAll("circle")
                          .data(dancers)
                          .enter()
                          .append("circle");

//Circles added to the circleGroup
//console.log("before attr", circles);

 var circleattr  =      circles
                       .attr("cx", function (d) { return d.x; })
                       .attr("cy", function (d) { return d.y; })
		       .attr("r", function(d) { return d.radius; })
        	       .style("fill", function(d) { return d.color;})
          	       .attr("class", function(d) {return d.class;})
          	       .attr("name", function(d) {return d.name;});


//console.log("circlesafterattr",circleattr);
        //circles should display now


//make text for each dancer
var ctext = circleGroup.selectAll("text")
            .data(dancers)
            .enter()
            .append("text")
          .attr("transform", function(d) { return "translate(" + 0 + "," + 0 + ")" });

var ctextLabels = ctext
    .text(function(d) { return d.name;})
    .attr("text-anchor", "middle")
    .attr("x", function (d) {return d.x; })
    .attr("y", function (d) {return d.y; })
    .attr("dy", "2em")
    .attr("font-family", "sans-serif")
    .attr("font-size", "25px")
    .attr("fill", "black");

var elinorTxt = d3.selectAll("text").filter(function(d){ ; return d.name == 'Elinor'; });
var willoughbyTxt = d3.selectAll("text").filter(function(d){ ; return d.name == 'Willoughby'; });
var elizabethTxt = d3.selectAll("text").filter(function(d){ ; return d.name == 'Elizabeth'; });
var darcyTxt = d3.selectAll("text").filter(function(d){ ; return d.name == 'Darcy'; });

//define specific circle

var circle1 = d3.select("#container .Dashwood");
var circle2 = d3.select("#container .Willoughby")
var circle3 = d3.select("#container .Bennett");
var circle4 = d3.select("#container .Darcy");

		var animations = [ 	

		function(){   return willoughbyTxt.transition(duration_speed).duration(duration_speed).attr("x", 350).attr("y",300); },
		function(){  return circle2.transition(duration_speed).duration(duration_speed).attr("cx", 350).attr("cy",300); },

		function(){   return elizabethTxt.transition(duration_speed).duration(duration_speed).attr("x", 250).attr("y",300); },
		function(){   return circle3.transition(duration_speed).duration(duration_speed).attr("cx", 250).attr("cy",300); },

		function(){   return elizabethTxt.transition(duration_speed).duration(duration_speed).attr("x", 320).attr("y",240); },
		function(){   return circle3.transition(duration_speed).duration(duration_speed).attr("cx", 320).attr("cy",240); },

		function(){   return willoughbyTxt.transition(duration_speed).duration(duration_speed).attr("x", 330).attr("y",340); },
		function(){   return circle2.transition(duration_speed).duration(duration_speed).attr("cx", 330).attr("cy",340); },
                function(){   return elinorTxt.transition(duration_speed).duration(duration_speed).attr("x", 170).attr("y", 300); } ,
                function(){   return circle1.transition(duration_speed).duration(duration_speed).attr("cx", 170).attr("cy", 300); } ,
       function(){   return darcyTxt.transition(duration_speed).duration(duration_speed).attr("x", 500).attr("y",300); },
       function(){   return circle4.transition(duration_speed).duration(duration_speed).attr("cx", 500).attr("cy",300); },
		function(){   return elizabethTxt.transition(duration_speed).duration(duration_speed).attr("x", 370).attr("y",300); },
		function(){   return circle3.transition(duration_speed).duration(duration_speed).attr("cx", 370).attr("cy",300); },
		function(){   return willoughbyTxt.transition(duration_speed).duration(duration_speed).attr("x", 260).attr("y",300); },
		function(){   return circle2.transition(duration_speed).duration(duration_speed).attr("cx", 260).attr("cy",300); },
                function(){   return elinorTxt.transition(duration_speed).duration(duration_speed).attr("x", 200).attr("y", 400); } ,
                function(){   return circle1.transition(duration_speed).duration(duration_speed).attr("cx", 200).attr("cy", 400); } ,
       function(){  return darcyTxt.transition(duration_speed).duration(duration_speed).attr("x", 360).attr("y",200); },
       function(){   return circle4.transition(duration_speed).duration(duration_speed).attr("cx", 360).attr("cy",200); },
		function(){   return elizabethTxt.transition(duration_speed).duration(duration_speed).attr("x", 370).attr("y",300); },
		function(){  return circle3.transition(duration_speed).duration(duration_speed).attr("cx", 370).attr("cy",300); },
		function(){   return willoughbyTxt.transition(duration_speed).duration(duration_speed).attr("x", 260).attr("y",300); },
		function(){   return circle2.transition(duration_speed).duration(duration_speed).attr("cx", 260).attr("cy",300); },
                function(){   return elizabethTxt.transition(duration_speed).duration(duration_speed).attr("x", 480).attr("y", 400); } ,
                function(){   return circle3.transition(duration_speed).duration(duration_speed).attr("cx", 480).attr("cy", 400); } ,
                function(){  return darcyTxt.transition(duration_speed).duration(duration_speed).attr("x", 500).attr("y", 200); } ,
                function(){  return circle4.transition(duration_speed).duration(duration_speed).attr("cx", 500).attr("cy", 200); } ,
                function(){   return willoughbyTxt.transition(duration_speed).duration(duration_speed).attr("x", 200).attr("y", 200); } ,
                function(){  return circle2.transition(duration_speed).duration(duration_speed).attr("cx", 200).attr("cy", 200); } ,

    ]
		
		function animate(index){
			if(index < animations.length - 1){
				index = index + 1
				return animations[index]().each("end", function() { animate(index) })
			} else {
				return true
			}
		}
		
		animate(-1)

        }; //end update

// these close up the directive
        }
      };
    }]);
}());

