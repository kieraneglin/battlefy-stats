var express = require('express');
var app = express();

// Only serve index for now.  Routing will be handled with angular
app.use(express.static('public'));

// Angular HTML5 routing won't support reloads unless you send all routes
// to your server's entrypoint
app.use(function(req, res) {
    res.sendFile(__dirname + '/public/index.html');
});

var server = app.listen(3000, function() {
 console.log('Listening on port %d', server.address().port);
});
