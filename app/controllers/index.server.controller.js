const config = require("../../config/config");

exports.render = function(req, res) {
    if (req.session.lastVisit) {
        console.log(req.session.lastVisit);
    }

    req.session.lastVisit = new Date();
    
    res.render('index', {
        title: 'Hello world',
        user: JSON.stringify(req.user)
    });
};