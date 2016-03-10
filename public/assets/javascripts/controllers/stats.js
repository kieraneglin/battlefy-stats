angular.module('LeagueStats').controller('StatsController', ['$scope', '$routeParams',
  function($scope, $routeParams) {
    $scope.playerId = $routeParams.playerId;
  }
]);
