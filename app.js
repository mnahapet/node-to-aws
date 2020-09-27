const express = require('express');
require('dotenv').config()
const app = express();

app.get('/', (req, res) => {
  res.status(200).send('Welcome to the home page baby the second time!')
})

const port = process.env.PORT || 3000;

const server = app.listen(port, () => {
    console.log('Server running at http://127.0.0.1:' + port + '/');
});
