const express = require('express');
const app = express();
const connectDB = require('./config/db');
connectDB();

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/orders', require('./routes/orders'));
app.post('/', (req, res) => {
  console.log(req.body, 'body');
  res.json(req.body);
});

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`server running on ${port}`));
