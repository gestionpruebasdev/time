const express = require('express');
const cors = require('cors');
const bodyparser = require('body-parser');

const app = express();

app.use(cors());

app.use(bodyparser.json());

app.get('/time', (req, res) => {
  res.json({ ok: true, time: (new Date(Date.now())) });
});

app.listen(3000 || process.env.port, () => {
  console.log('server running');
});
