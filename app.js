var express = require('express');
var app = express();
var request = require('request');
var config = require('./env.json');

app.use(express.static('public'));

app.get('/api/get_summoner_id/:name', function(req, res){

  //https://na.api.pvp.net/api/lol/na/v1.4/summoner/by-name/RiotSchmick?api_key=<key>
  var BASEURL = 'https://na.api.pvp.net/api/lol/na/v1.4/summoner/by-name/';
  var summonerName = req.query.name;

  console.log(config.api_key);
  // request(baseUrl, function (error, response, body) {
  //   if (!error && response.statusCode == 200) {
  //     res.json(body); // Show the HTML for the Google homepage.
  //   }
  // });
});

// Angular HTML5 routing won't support reloads unless you send all routes
// to your server's entrypoint
app.use(function(req, res) {
    res.sendFile(__dirname + '/public/index.html');
});

var server = app.listen(3000, function() {
 console.log('Listening on port %d', server.address().port);
});
