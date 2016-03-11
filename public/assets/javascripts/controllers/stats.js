(function() {
  angular.module('LeagueStats').controller('StatsController', ['$scope', '$routeParams', '$location', 'PlayerFind',
    function($scope, $routeParams, $location, PlayerFind) {

      $scope.loading = true;
      $scope.playerFound = false;
      $scope.canGetStats = false;
      $scope.playerName = $routeParams.playerId;

      api_username = $scope.playerName.toLowerCase();
      api_username = api_username.replace(/\s+/g, '');

      PlayerFind.findByUsername(api_username)
        .then(function(response) {
          if (response.data && response.data[api_username]) {
            $scope.playerFound = true;
            $scope.playerId = response.data[api_username].id;
            return $scope.playerId;
          } else {
            // Redundant re-assignment, but reads easier
            $scope.playerFound = false;
            $scope.loading = false;
            $scope.canGetStats = false;
          }
        }).then(function(data) {
          if ($scope.playerFound) {
            PlayerFind.findById(data)
              .then(function(response) {
                $scope.playerStats = response.data;
              });
          }
          return data;
        }).then(function(data) {
          if ($scope.playerFound) {
            PlayerFind.getRecentGames(data).then(function(response) {
              $scope.recentGames = response.data;
              $scope.canGetStats = true;
              $scope.loading = false;
            });
          } else {
            $scope.canGetStats = false;
            $scope.loading = false;
          }
        });

    }
  ]);
})();
