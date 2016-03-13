var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
var apiRoutes = require('./api_routes');

app.use(express.static('public'));

// This handles the routing only for the API.  Angular has it's own set of routes defined
apiRoutes(app);

// Angular HTML5 routing won't support reloads unless you send all routes
// to your server's entrypoint
app.use(function(req, res) {
    res.sendFile(__dirname + '/public/index.html');
});

var server = app.listen(port, function() {
 console.log('Listening on port %d', server.address().port);
});
