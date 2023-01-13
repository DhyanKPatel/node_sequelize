const express = require('express');
const router = express();
const passport = require('passport');
const addressBook = require('../controller/addressBookController');
const { validator } = require('../middleware/validator');
const validateAddressBook = require('../validation/addressBookValidation');



router.post('/createAddressBook', passport.authenticate('jwt', { session: false }), validator.body(validateAddressBook.createAddressBook), addressBook.createAddressBook);
// router.get('/getAddressData', passport.authenticate('jwt', { session: false }), addressBook.getAddress);
router.get('/readAddressBook', passport.authenticate('jwt', { session: false }), addressBook.readAddressBook);
router.put('/updateAddressBook/:id', passport.authenticate('jwt', { session: false }), validator.body(validateAddressBook.updateAddressBook), addressBook.updateAddressBook);
router.delete('/deleteAddressBook/:id', passport.authenticate('jwt', { session: false }), addressBook.deleteAddressBook);

module.exports = router;