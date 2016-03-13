(function() {
  angular.module('LeagueStats').controller('StatsController', ['$scope', '$routeParams', '$location', 'PlayerFind', 'Graph',
    function($scope, $routeParams, $location, PlayerFind, Graph) {

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
              return $scope.recentGames;
            }).then(function(data) {
              data = data.games.map(function(el) {
                el.stats.championsKilled = el.stats.championsKilled || 0;
                el.stats.assists = el.stats.assists || 0;
                el.stats.numDeaths = el.stats.numDeaths || 1;
                return (el.stats.championsKilled + el.stats.assists) / el.stats.numDeaths;
              });
              Graph(data);
            });
          } else {
            $scope.canGetStats = false;
            $scope.loading = false;
          }

        });

    }
  ]);
})();
