const passport = require('../config/passport.js');
const session = require('express-session');
const parser = require('body-parser');
const router = require('./routes.js');
const express = require('express');
const db = require('../Database');
const helmet = require('helmet');
const morgan = require('morgan');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000

// app.use(session( {
//   secret: "he is a phantom",
//   cookie: {
//     maxAge: 60000
//   }
// }))
app.use(helmet());
app.use(morgan('dev'));
app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));
app.use(express.static(path.resolve(__dirname, '../static')));

// app.use(session({
//   secret: "WhatWillBecomeOfMe",
//   resave: true,
//   saveUninitialized: true
// }))
// app.use(passport.initialize());
// app.use(passport.session());
app.use('/', router); //routes

app.listen(port, () => {
  console.log('connected to port ', port);
})