var express = require('express'),
    bodyParser = require('body-parser'),
    swagger=require('swagger-express');

module.exports = function () {
    var app = express();

    app.use(bodyParser.urlencoded({extended: true}));

    app.use(bodyParser.json());

    require('../app/routes/app.server.routes.js')(app);

    app.use(express.static('./public'));

    app.use(swagger.init(app, {
        apiVersion: '1.0',
        swaggerVersion: '1.0',
        swaggerURL: '/swagger',
        swaggerJSON: '/api-docs.json',
        swaggerUI: './public/swagger/',
        basePath: 'http://localhost:3000',
        apis: ['./api.js', './api.yml'],
        middleware: function(req, res){}
  }));


    return app;
};
