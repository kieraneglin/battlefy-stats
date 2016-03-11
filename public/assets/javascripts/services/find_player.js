(function() {
  angular.module('LeagueStats')
    .factory('PlayerFind', ['$http', function PlayerFindFactory($http) {
      return {
        findByUsername: function(username){
          return $http({
            method: 'GET',
            url: '/api/get_summoner_id/' + username + '.json'
          });
        },
        findById: function(id){
          return $http({
            method: 'GET',
            url: '/api/get_summoner_stats/' + id + '.json'
          });
        }
      };
  }]);
})();
