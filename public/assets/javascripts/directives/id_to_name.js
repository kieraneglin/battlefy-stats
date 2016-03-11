angular.module('LeagueStats').directive('idToName', ['PlayerFind', function(PlayerFind) {
  return {
    template: "<span>{{name}}</span>",
    scope: {
      playerId: "="
    },
    link: function(scope) {
      PlayerFind.getNameById(scope.playerId).then(function(result) {
        scope.name = result.data[scope.playerId].name;
      });
    }
  };
}]);
