(function() {
  angular.module('LeagueStats').controller('SearchController', ['$scope', '$location',
    function($scope, $location) {

      $scope.search = function(person) {
        $location.path("/stats/" + person);
      };
    }
  ]);
})();
