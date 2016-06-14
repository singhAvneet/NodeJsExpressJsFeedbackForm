//This code uses the CommonJS module pattern to define a function named render()
//You can require this module and use this function
//You'll need to use Express routing functionality to utilize the controller
exports.render = function (req, res) {
    var session = req.session;
    if (session.username) {
        //   res.write('<h1>Hello ' + session.username + '</h1><br>');
        //   res.write('<h1>Hello ' + session.id + '</h1><br>');
        // res.end('<a href=' + '/logout' + '>Logout</a>');
        // res.end('<a href=' + '/feedback' + '>Logout</a>');
        
  //    res.render('feedback.html');       //      'pages/index'
        res.render('feedback.ejs',{
            username:session.username
        });
       
    }
            
    else {

        res.write('<h1>Please login first.</h1>');
        res.end('<a href=' + '/' + '>Login</a>');
        res.write('<h1>Hello ' + session.id + '</h1><br>');
    }

    
};