var path = require('path');

//module that export's path.
module.exports = function(app){
    app.get('/', function(req, res) {
        res.sendFile(path.join(__dirname, '../public/home.html'));
    });
    app.get('/survey', function(req, res) {
        res.sendFile(path.join(__dirname, '../public/survey.html'));
    })
};
