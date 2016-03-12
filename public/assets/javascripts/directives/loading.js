(function() {
  angular.module('LeagueStats').directive('loadingIcon', function() {
    return {
      templateUrl: 'views/partials/loading.html',
      restrict: 'EA'
    };
  });
})();
