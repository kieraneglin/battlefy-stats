angular.module('LeagueStats').config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/', {
      // redirect to the notes index
      redirectTo: '/search'
    })
    .when('/search', {
      templateUrl: 'views/partials/search.html'
    })
    .when('/stats/:playerId', {
      templateUrl: 'views/partials/stats.html',
      controller: 'StatsController'
    })
    .otherwise({redirectTo: '/'});
}]);
