(function() {
  angular.module('LeagueStats')
    .factory('Graph', [function PlayerFindFactory() {
      return function(data) {
        var margin = {
          top: 80,
          right: 20,
          bottom: 80,
          left: 50
        };
        var width = 640 - margin.right - margin.left;
        var height = 300 - margin.top - margin.bottom;
        var x = d3.scale
          .linear()
          .domain([0, data.length - 1])
          .range([0, width]);
        var y = d3.scale
          .linear()
          .domain([0, d3.max(data) + 1])
          .range([height, 0]);
        var line = d3.svg.line()
          .x(function(d, i) {
            return x(i);
          })
          .y(function(d) {
            return y(d);
          });
        var graph = d3.select("#graph")
          .append("div")
          .classed("svg-container", true)
          .append("svg")
          .attr("preserveAspectRatio", "xMinYMin meet")
          .attr("viewBox", "0 50 600 300")
          .classed("svg-content-responsive", true)
          .append("svg:g")
          .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
        var xAxis = d3.svg.axis()
          .scale(x)
          .tickSize(-height)
          .tickFormat("")
          .tickSubdivide(false);
        graph.append("svg:g")
          .attr("class", "x axis")
          .attr("transform", "translate(-25," + height + ")")
          .call(xAxis);
        var yAxisLeft = d3.svg.axis()
          .scale(y)
          .orient("left");
        graph.append("svg:g")
          .attr("class", "y axis")
          .attr("transform", "translate(-25,0)")
          .call(yAxisLeft);
        graph.append("svg:path")
          .classed("line", true)
          .attr("d", line(data))
          .attr("transform", "translate(-25,0)");
      };

    }]);
})();
