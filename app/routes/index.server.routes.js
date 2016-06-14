//This uses CommonJS module pattern to export a single module function.
//This function takes an express object as argument 
//Then it requires the index controller and uses its render() method
//as a middleware to GET requests made to the root path.

module.exports = function (app) {
    var index = require('../controllers/index.server.controller');
    
    var login = require('../controllers/login.server.controller');
    var logout = require('../controllers/logout.server.controller');
    var admin = require('../controllers/admin.server.controller');
    var feedback = require('../controllers/feedback.server.controller');
   
    //
    app.get('/', index.render);
    app.post('/login', login.render);
    app.get('/admin', admin.render);
  
    app.get('/feedback', feedback.render);
    app.get('/logout', logout.render);

};
