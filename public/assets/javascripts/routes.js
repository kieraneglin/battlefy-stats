(function() {
  angular.module('LeagueStats').config(['$routeProvider', '$locationProvider',
    function($routeProvider, $locationProvider) {
      $routeProvider
        .when('/', {
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

        // To remove those way-lame hashes from URL
        $locationProvider.html5Mode(true);
    }
  ]);
})();
