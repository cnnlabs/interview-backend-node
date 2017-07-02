process.env.NODE_ENV = process.env.NODE_ENV || 'development';//if value does not exist set it to 'development'
var config=require('./config/config'),
    express = require('./config/express'),//express application 
    app = express(),//initialize express instance
    server=app.listen(config.port);
    
module.exports = server;
console.log('Server running at '+config.host+config.port+'/ in a '+ process.env.NODE_ENV +' environment');
