angular.module('LeagueStats').controller('StatsController', ['$scope', '$routeParams', '$location',
  function($scope, $routeParams, $location) {
    $scope.playerId = $routeParams.playerId;
    $scope.redir = function(person) {
      $location.path("/stats/" + person);
    };
  }
]);
