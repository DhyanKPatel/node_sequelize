const express = require('express');
const router = express();
const passport = require('passport');
const user = require('../controller/userController');
const { validator } = require('../middleware/validator');
const validateUser = require('../validation/userValidaton');
const {upload} = require('../middleware/multer');
const {generateToken} = require('../helper/genrateToken');


router.post('/signup', upload.single('profile'),validator.body(validateUser.register),user.signup);
router.post('/logging', generateToken, validator.body(validateUser.logging), user.logging);

router.get('/viewProfile', passport.authenticate('jwt', { session: false }), user.viewProfile);
router.put('/updateProfile', upload.single('profile'), passport.authenticate('jwt', { session: false }), validator.body(validateUser.update), user.updateProfile);

router.post('/resetPassword', passport.authenticate('jwt', { session: false }), validator.body(validateUser.resetpassword), user.resetPassword);

module.exports = router;