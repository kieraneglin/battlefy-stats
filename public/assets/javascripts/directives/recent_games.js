(function() {
  angular.module('LeagueStats').directive('recentGames', function() {
    return {
      templateUrl: 'views/partials/recent-games.html',
      restrict: 'EA'
    };
  });
})();
