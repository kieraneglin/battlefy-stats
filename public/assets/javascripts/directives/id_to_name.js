(function() {
  angular.module('LeagueStats').directive('idToName', ['PlayerFind', function(PlayerFind) {
    return {
      template: "<img src='{{url}}'/><div>{{name}}</div>",
      scope: {
        playerId: "="
      },
      link: function(scope) {
        PlayerFind.getNameById(scope.playerId).then(function(result) {
          if (result.data[0]) {
            scope.name = result.data[0].name;
            scope.url = "http://sk2.op.gg/images/champions/" + scope.name.replace(/[.,\/#!$%\^&\*;:{}'=\-_`~()]/g, "").toLowerCase() + "_square_0.png";
          } else {
            // If user is unknown, default here.
            // This is due to my essentially non-existent knowlege of LoL champions
            // And the out-of-date lists I could find

            // I tried using the API, but that exceeded my ratelimit
            scope.name = 'Morgana';
            scope.url = "http://sk2.op.gg/images/champions/" + scope.name.replace(/[.,\/#!$%\^&\*;:{}'=\-_`~()]/g, "").toLowerCase() + "_square_0.png";
          }
        });
      }
    };
  }]);
})();
