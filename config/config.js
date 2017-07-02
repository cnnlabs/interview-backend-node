//this file will determine development or production environment by accessing
//the global process.env.NODE_ENV varible and requiring the appropriate file accordingly.
//note that default is set to be 'development' if environment value not set in line 1 of server.js


//how to set server environment:
// type this in CLI:
// $ export NODE_ENV=development


module.exports = require(`./env/${  process.env.NODE_ENV  }.js`);