const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.status(200).send('Welcome to the home page baby!')
})

app.listen(3000, () => {
  console.log('Server is listening on port 3000')
});
