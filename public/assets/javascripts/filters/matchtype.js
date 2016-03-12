(function() {
  angular.module('LeagueStats').filter('match', function() {
    return function(input) {
      switch (input) {
        case 'CoopVsAI':
          match = 'Co-op VS AI';
          break;
        case 'RankedPremade3x3':
          match = 'Premade 3x3 R';
          break;
        case 'RankedPremade5x5':
          match = 'Premade 5x5 R';
          break;
        case 'RankedTeam3x3':
          match = 'Team 3x3 R';
          break;
        case 'RankedTeam5x5':
          match = 'Team 5x5 R';
          break;
        case 'Unranked3x3':
          match = '3x3 U';
          break;
        case 'RankedSolo5x5':
          match = 'Solo 5x5 R';
          break;
        case 'CAP5x5':
          match = 'Cap 5x5';
          break;
        case 'OdinUnranked':
          match = 'Odin U';
          break;
        case 'Unranked':
          match = 'Unranked';
          break;
        case 'AramUnranked5x5':
          match = 'Aram 5x5 U';
          break;
        case 'CoopVsAI3x3':
          match = 'Co-op VS AI 3x3';
          break;
        default:
          match = 'Unknown match type';
      }
      return match;
    };
  });
})();
