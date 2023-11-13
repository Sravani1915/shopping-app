const express = require('express');
const fileSystem = require('fs');
const app = express();
const port = 3000;
const importingJSON = fileSystem.readFileSync('data.json', 'UTF8');
const itemData = JSON.parse(importingJSON);

const cors = require('cors');
app.use(cors());

app.use('/', express.static('public'));

app.get('/itemPrices', (req,res) => {
  res.json(itemData);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});