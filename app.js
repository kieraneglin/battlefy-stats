var express = require('express');
var app = express();
var request = require('request');
var config = require('./env.json');
var champions = require('./championlist.json');

app.use(express.static('public'));


// TODO: For tommorrow, definitely abstract to own file

// IDEA: If this needs to be expanded, definitely abstract to it's own file
// Get user's ID from Username
// Region of NA is assumed
app.get('/api/get_summoner_id/:name.json', function(req, res){

  var baseUrl = 'https://na.api.pvp.net/api/lol/na/v1.4/summoner/by-name/';
  var summonerName = req.params.name;
  var fullUrl = baseUrl + summonerName + '?api_key=' + config.api_key;

  request(fullUrl, function (error, response, body) {
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
app.get('/api/get_summoner_stats/:id.json', function(req, res){

  var baseUrl = 'https://na.api.pvp.net/api/lol/na/v1.3/stats/by-summoner/';
  var summonerId = req.params.id;
  var fullUrl = baseUrl + summonerId + '/summary?api_key=' + config.api_key;

  request(fullUrl, function (error, response, body) {
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

app.get('/api/get_recent_games/:id.json', function(req, res){

  var baseUrl = 'https://na.api.pvp.net/api/lol/na/v1.3/game/by-summoner/';
  var summonerId = req.params.id;
  var fullUrl = baseUrl + summonerId + '/recent?api_key=' + config.api_key;

  request(fullUrl, function (error, response, body) {
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

app.get('/api/get_champion_name/:id.json', function(req, res){
  var summonerId = req.params.id;

  champ = champions.filter(function (el) {
    return el.id == summonerId;
  });

  res.json(champ);
});

// Angular HTML5 routing won't support reloads unless you send all routes
// to your server's entrypoint
app.use(function(req, res) {
    res.sendFile(__dirname + '/public/index.html');
});

var server = app.listen(3000, function() {
 console.log('Listening on port %d', server.address().port);
});
