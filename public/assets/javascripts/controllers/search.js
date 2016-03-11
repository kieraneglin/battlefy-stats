(function() {
  angular.module('LeagueStats').controller('SearchController', ['$scope', '$location',
    function($scope, $location) {

      $scope.search = function(person) {
        person = person.replace(/\s+/g, '');
        $location.path("/stats/" + person);
      };
    }
  ]);
})();
