(function() {
  angular.module('LeagueStats').directive('idToName', ['PlayerFind', function(PlayerFind) {
    return {
      template: "<img src=\"http://sk2.op.gg/images/champions/{{name.toLowerCase()}}_square_0.png\"/><div>{{name}}</div>",
      scope: {
        playerId: "="
      },
      link: function(scope) {
        PlayerFind.getNameById(scope.playerId).then(function(result) {
          if (result.data[0]) {
            scope.name = result.data[0].name;
          } else {
            scope.name = 'Morgana';
          }
        });
      }
    };
  }]);
})();
