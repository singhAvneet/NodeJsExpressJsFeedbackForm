
exports.render = function (req, res) {
    var session = req.session;
    //session.username
    if (session.username) {
        
       res.write('<h1>Hello ' + session.username+ '</h1><br>');
    //   res.write('<h1>Hello ' + session.id + '</h1><br>');
       res.end('<a href=' + '/logout' + '>Logout</a>');
    }
    else {
        res.write('<h1>Thanks for your feedback</h1><br>');
        res.end('<a href=' + '/logout' + '>Logout</a>');
        //res.render('index.html');
    }
    
};