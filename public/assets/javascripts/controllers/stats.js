(function() {
  angular.module('LeagueStats').controller('StatsController', ['$scope', '$routeParams', '$location', 'PlayerFind',
    function($scope, $routeParams, $location, PlayerFind) {

      let username = $routeParams.playerId;

      $scope.playerName = username;
      $scope.redir = function(person) {
        $location.path("/stats/" + person);
      };

      searchByName(username);

      function searchByName(username) {
        $scope.loading = true;
        $scope.playerFound = false;
        username = username.toLowerCase();

        PlayerFind.findByUsername(username).then(function(response) {
          if (response.data && response.data[username]) {
            var playerId = response.data[username].id;
            searchById(playerId);
          } else {
            $scope.playerFound = false;
            $scope.loading = false;
          }
        });
      }

      function searchById(playerId) {
        PlayerFind.findById(playerId).then(function(response) {
          $scope.loading = false;
          $scope.playerFound = true;
          $scope.fullStats = response.data;
        });
      }
    }
  ]);
})();
