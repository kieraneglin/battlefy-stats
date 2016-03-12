(function() {
  angular.module('LeagueStats').directive('statTable', function() {
    return {
      templateUrl: 'views/partials/statstable.html',
      restrict: 'EA'
    };
  });
})();
