const express = require('express');
const app = express()
const bodyParser = require('body-parser');
const passport = require('passport');
require("dotenv").config()
require('./helper/authPassport')(passport)
const logger = require('../demo-3(sequelize)/helper/loggin');
const { route } = require('./routes/userRoute');
require('./model/db');

app.use(bodyParser.urlencoded({ extended: false, parameterLimit:100000,limit:'1000mb' }));
app.use(bodyParser.json());

app.use(express.static('public/uploads'));
app.use(express.json())
// app.use('/',route);
app.use('/',require('./routes/userRoute'));
app.use('/',require('./routes/addressBookRoute'));
app.use(require('./helper/response'));
app.use(require('./helper/error').handleJoiErrors);
app.use(require('./helper/error').handleErrors);
app.use(passport.initialize());
app.use(passport.session());

const port = process.env.PORT || 4000;


app.listen(port, () => console.log(`Listening on port ${port}`));