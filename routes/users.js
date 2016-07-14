var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});

/* GET registration page */
router.get('/register', function (req, res, next) {
    res.render('register', {
        'title': 'Register'
    });
});

/* GET login page */
router.get('/login', function (req, res, next) {
    res.render('login', {
        'title': 'Login'
    });
});

router.post('users/register', function(req, res, next){
    //Get the form values
    var name = req.body.name;
    var email = req.body.email;
    var username = req.body.username;
    var password = req.body.password;
    var password_repeat = req.body.passpassword_repeat;
});

module.exports = router;
