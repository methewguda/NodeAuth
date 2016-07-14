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

    //Check for image filed
    if(req.file.image){
        //logging image uploading
        console.log('Uploading Image File..........');

        //File information
        var image_original      = req.file.image.originalname;
        var image_profile       = req.file.image.name;
        var image_profile_MIME  = req.file.image.mimetype;
        var image_profile_PATH  = req.file.image.path;
        var image_profile_EXT   = req.file.image.extension;
        var image_profile_SIZE  = req.file.image.size;
    }else{
        //Set a default image
        var image_profile = 'default_image.png';
    }

});

module.exports = router;
