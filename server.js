const express = require('express');
const app = express();
const session = require('express-session');

const { connectDB, sessionConfig } = require('./config/db');
const cors = require('cors');

connectDB();
app.use(session(sessionConfig));
app.use(cors());
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/orders', require('./routes/orders'));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`server running on ${port}`));
