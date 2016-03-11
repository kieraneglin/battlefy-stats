(function() {
  angular.module('LeagueStats').controller('StatsController', ['$scope', '$routeParams', '$location', 'PlayerFind',
    function($scope, $routeParams, $location, PlayerFind) {

      $scope.loading = true;
      $scope.playerFound = false;
      $scope.playerName = $routeParams.playerId;

      api_username = $scope.playerName.toLowerCase();

      PlayerFind.findByUsername(api_username).then(function(response) {
        if (response.data && response.data[api_username]) {
          var playerId = response.data[api_username].id;
          searchById(playerId);
        } else {
          $scope.playerFound = false;
          $scope.loading = false;
        }
      });

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
