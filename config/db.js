const mongoose = require('mongoose');
const express = require('express');
const app = express();
const config = require('config');
let db = '';
if (process.env.NODE_ENV === 'production') {
  db = process.env.mongoURI;
} else {
  db = config.get('mongoURI');
}
const session = require('express-session');
const MongoStore = require('connect-mongo');

const connectDB = () =>
  mongoose
    .connect(db, {
      useNewUrlParser: true,
      useFindAndModify: false,
      useCreateIndex: true,
      useUnifiedTopology: true
    })
    .then(() => console.log('mongodb Connected'))
    .catch((e) => {
      console.log(e.message, 'mongo error'), process.exit(1);
    });

const secret = '@#%%@#EDSsdfsdkfdkdk_s';
const store = new MongoStore({
  mongoUrl: db,
  crypto: {
    secret
  },

  touchAfter: 24 * 60 * 60
});

store.on('error', function (e) {
  console.log('SESSION STORE ERROR', e);
});

const sessionConfig = {
  store,
  name: 'which-session',
  secret,
  resave: false,
  saveUninitialized: true,
  cookie: {
    httpOnly: true,
    // secure: true,
    expires: Date.now() + 1000 * 60 * 60 * 24 * 7,
    maxAge: 1000 * 60 * 60 * 24 * 7
  }
};

module.exports = { connectDB, sessionConfig };
