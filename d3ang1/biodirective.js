(function () {
  'use strict';

  angular.module('bcaApp.directives')
    .directive('bcaTest', ['d3', function(d3) {
      return {
       controller: 'bcaCtrl',
        restrict: 'E',
        scope: {
          data: "=",
          inputs: "=",
          calcStyle: "&",
          rsInputs: "@input2",
          //gsInput: "=input1",
        },
        link: function(scope, iElement, iAttrs ) {

        var svg = d3.select(iElement[0])
          .append("svg")
              .attr("width", "100%");


          // on window resize, re-render d3 canvas
          window.onresize = function() {
            return scope.$apply();
          };
          scope.$watch(function(){
              return angular.element(window)[0].innerWidth;
            }, function(){
             return scope.render(scope.data);
            }
          );

          // watch for data changes and re-render
          scope.$watch('inputs', function(newVals, oldVals) {
            return scope.render(newVals);
          }, true);

          // watch for data changes and re-render
          scope.$watch('rsInputs', function(newVals, oldVals) {
           return scope.render(newVals);
         });



scope.render = function(inputs) {
          if (inputs === undefined) {
            return ;
          }

          //svg.selectAll("*").remove(); //why doesn't this work?
          d3.selectAll("svg").remove();
           update();
          };
//console.log("rsInputs", scope.rsInputs);

//insert your d3 code here

function update() {

var whatthis = scope.inputs;
//console.log("whatthisinputs", whatthis);

//console.log("rsInputs", scope.rsInputs);

    var temp =  scope.rsInputs;
    console.log('endstring', endString);
var endString ='/1234';
var newrString = temp + endString;
    var ruleString = newrString;
    //console.log('rulestring', ruleString);
    var gridSize = 200;
   console.log("gridsize", gridSize);
  
           var gridCellNum = 100,
            cellSize = ~~(gridSize / gridCellNum);
             //console.log("cellsize",cellSize);
    var data = d3.range(gridCellNum).map(function(d, i){return d3.range(gridCellNum).map(function(d, i, a){
        return ~~(Math.random()*2);
    });});

    var count = 0;
    var timer = setInterval(refreshGrid,5);

    function refreshGrid(){
        var dataTmp = [];
        data.forEach(function(pD, pI){
            dataTmp[pI] = [];
            return pD.forEach(function(d, i){
                var birth = ruleString.split('/')[0].split('').map(function(d, i){return ~~d;});
                var survival = ruleString.split('/')[1].split('').map(function(d, i){return ~~d;});
                var neighbours = countNeighbors(i, pI);
                var alive = !!d;

                dataTmp[pI][i] = d;
                if(alive) dataTmp[pI][i] = ~~(survival.indexOf(neighbours) != -1);
                else dataTmp[pI][i] = ~~(birth.indexOf(neighbours) != -1);
        });});

        data = dataTmp;

        var rows = root.selectAll('g.row')
                .data(data);
        var cells = rows.selectAll('rect.cell')
                .data(function(d, i){return d;});
        cells.style({fill: function(d, i, pI){
            return (!!d)? 'black': 'white';
            //return (!!d)? 'blue': 'white';
        }});

        count++;
        //if(count >= 100)clearInterval(timer);
        if(count >= 5)clearInterval(timer);
    }

    function countNeighbors(col, row){
        var cellValue = data[row][col];
        var n = (row-1 >= 0)? row-1: gridCellNum-1;
        var s = (row+1 <= (gridCellNum-1))? row+1: 0;
        var w = (col-1 >= 0)? col-1: gridCellNum-1;
        var e = (col+1 <= (gridCellNum-1))? col+1: 0;

        var livingNeighbours = data[col][w]
                + data[n][w]
                + data[s][w]
                + data[col][e]
                + data[n][e]
                + data[s][e]
                + data[s][row]
                + data[n][row];
        return livingNeighbours;
    }

    var root = d3.select('#grid').append('svg')
            .attr({width: gridSize, height: gridSize})
            .classed('root', true);
    var rows = root.selectAll('g.row')
            .data(data);
    rows.enter().append('g')
            .classed('row', true)
            .attr({transform: function(d, i){return 'translate(0,' + cellSize * i + ')';}});
    var cells = rows.selectAll('rect.cell')
            .data(function(d, i){return d;});
    cells.enter().append('rect')
            .classed('cell', true)
            .attr({width: cellSize, height: cellSize, x: function(d, i){return cellSize*i;}});
    cells.style({fill: function(d, i){return (!!d)? 'black': 'white';}});
    

  }; //end of redraw


//scope.$watch('inputs', function(){

            //svg.selectAll("rect").remove();
            //svg.selectAll("svg").remove();
 //             scope.render(scope.data);
  //        });


//this is the end of d3 code
       }//end of render
    }; //end of return 
    }]); //end of link
}()); 
