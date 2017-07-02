var test=require('../controllers/test.server.controller');

module.exports = function(app) {
    app.route('/') 
        .get(test.test)
    ;    
};
