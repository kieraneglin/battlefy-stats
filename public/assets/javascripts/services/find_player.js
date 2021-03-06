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
        },
        getRecentGames: function(id){
          return $http({
            method: 'GET',
            url: '/api/get_recent_games/' + id + '.json'
          });
        },
        getNameById: function(id){
          return $http({
            method: 'GET',
            url: '/api/get_champion_name/' + id + '.json'
          });
        }
      };
  }]);
})();
