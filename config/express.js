var express = require('express'),
    bodyParser = require('body-parser'),
    ReactEngine = require('express-react-engine');

module.exports = function () {
    var app = express();

    app.use(bodyParser.urlencoded({extended: true}));

    app.use(bodyParser.json());

    app.set('views', './public/build');

    app.set('view engine', 'jsx');

    app.engine('jsx', ReactEngine({wrapper: 'index.html'}));

    require('../app/routes/app.server.routes.js')(app);

    app.use(express.static('./public'));

    return app;
};
