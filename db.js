process.env.NODE_ENV = process.env.NODE_ENV || 'development';//if value does not exist set it to 'development'
var config=require('./config/config'),
    mongoose = require('./config/mongoose'), //database we'll be connecting to    
    db = mongoose(); //initialize mongoose connection
exports.db = db;

console.log('Mongoose connection to '+config.db.uri+' in '+ process.env.NODE_ENV +' environment');
