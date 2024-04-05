const express = require('express');
const request = require('request');
// const { readFileSync } = require('node:fs')
const { resolve } = require('node:path')

const app = express();

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.get('/', (req, res) => res.sendFile(resolve('./troystudenthousing.html')));

app.get('/tsh', (req, res) => {
  request(
    { url: 'https://www.troystudenthousing.com/apartments/2014-14th-st-troy-ny/' },
    (error, response, body) => {
      if (error || response.statusCode !== 200) {
        return res.status(500).json({ type: 'error', message: err.message });
      }

      res.header('Access-Control-Allow-Origin', '*').send(body); // json(JSON.parse(body));
    }
  )
});

const PORT = process.env.PORT || 3030;
app.listen(PORT, () => console.log(`listening on ${PORT}`));
