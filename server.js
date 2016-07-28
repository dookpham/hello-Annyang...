const express = require('express');
const path = require('path');

const app = express();

app.use('/', express.static(path.resolve(__dirname)));

app.listen(3002, () => {
  console.log('listening on port 3002');
})
