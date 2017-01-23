//requiring the express module.
var express = require('express');

//requiring the body-parser module.
var bodyParser = require('body-parser');

//requiring the path module.
var path = require('path');

//creating to the port 9000 this for local testing
var PORT = process.env.PORT || 9000;

//storing the express module into a vairable app.
var app = express();

//using the bodyParser
// handling the parsing of the application/json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type: 'application/vnd.api + json'}));

app.use(express.static('app/public'));

//reqiure the html and the api route.
require('./app/routing/htmlRoutes.js')(app);
require('./app/routing/apiRoutes.js')(app);

//listing for the server connection
app.listen(PORT, function(){
    console.log('Server Connected to ' +  PORT)
});
