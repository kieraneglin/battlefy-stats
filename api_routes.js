module.exports = function(app) {
  var request = require('request');
  var champions = require('./championlist.json');
  var config = process.env.LOL_KEY;

  app.get('/api/get_summoner_id/:name.json', function(req, res) {

    var baseUrl = 'https://na.api.pvp.net/api/lol/na/v1.4/summoner/by-name/';
    var summonerName = req.params.name;
    var fullUrl = baseUrl + summonerName + '?api_key=' + config;

    request(fullUrl, function(error, response, body) {
      if (!error && response.statusCode == 200) {
        res.json(JSON.parse(body));
      } else {
        res.json({
          "error": error,
          "response": response,
          "status": response.statusCode
        });
      }
    });
  });

  // Get list of full stats from user's ID
  // Region of NA is assumed
  app.get('/api/get_summoner_stats/:id.json', function(req, res) {

    var baseUrl = 'https://na.api.pvp.net/api/lol/na/v1.3/stats/by-summoner/';
    var summonerId = req.params.id;
    var fullUrl = baseUrl + summonerId + '/summary?api_key=' + config;

    request(fullUrl, function(error, response, body) {
      if (!error && response.statusCode == 200) {
        res.json(JSON.parse(body));
      } else {
        res.json({
          "error": error,
          "response": response,
          "status": response.statusCode
        });
      }
    });
  });

  app.get('/api/get_recent_games/:id.json', function(req, res) {

    var baseUrl = 'https://na.api.pvp.net/api/lol/na/v1.3/game/by-summoner/';
    var summonerId = req.params.id;
    var fullUrl = baseUrl + summonerId + '/recent?api_key=' + config;

    request(fullUrl, function(error, response, body) {
      if (!error && response.statusCode == 200) {
        res.json(JSON.parse(body));
      } else {
        res.json({
          "error": error,
          "response": response,
          "status": response.statusCode
        });
      }
    });
  });

  app.get('/api/get_champion_name/:id.json', function(req, res) {
    var summonerId = req.params.id;

    champ = champions.filter(function(el) {
      return el.id == summonerId;
    });

    res.json(champ);
  });
};
