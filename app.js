var express = require('express');
var app = express();

// Only serve index for now.  Routing will be handled with angular
app.use(express.static('public'));

var server = app.listen(3000, function() {
 console.log('Listening on port %d', server.address().port);
});
