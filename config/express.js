//express.js file is where we configure our Express application
//
var config = require('./config'),
    express = require('express'),
    morgan = require('morgan'),
    compress = require('compression'),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override'),
    session = require('express-session');

module.exports = function () {
    //Create the Express application object
    var app = express();
    //the process.env property allows you to access predefined environment variables 
    //such as NODE_ENV
    if (process.env.NODE_ENV === 'development') {
        app.use(morgan('dev'));
    } else if (process.env.NODE_ENV === 'production') {
        app.use(compress());
    }
    
    app.use(bodyParser.urlencoded({
        extended: true
    }));
    app.use(bodyParser.json()); //use middleware that only parses json
    app.use(methodOverride()); // use HTTP verbs such as PUT or DELETE in places where the client doesn't support it.
    //saveUninitialized - orces a session that is "uninitialized" to be saved to the store
    //resave - forces the session to be saved back to the session store
    app.use(session({
        saveUninitialized: true,
        resave: true,
        secret: config.sessionSecret
    }));
    //Configure Express to use EJS module as the default template engine
    app.set('views', './app/views');
    app.set('view engine', 'ejs');
    app.engine('html', require('ejs').renderFile);
    //bootstrap the app using the controller and routing modules
    require('../app/routes/index.server.routes.js')(app);
    //The express.static() middleware takes one argument 
    //to determine the location of the static folder
    app.use(express.static('./public'));
    return app;
};
