//mongodb file
require('dotenv').config();
const mongoose = require('mongoose');
const connection = process.env.MONGODB_URI || process.env.DB_URI;
mongoose.connect(connection, {useNewUrlParser: true}); //connecting with server


const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', () => {
  console.log('----------connected to db----------')
})