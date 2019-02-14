const express = require('express');
const fs = require('fs');

const app = express();

app.use((req, res, next) => {
  console.log(req.url);
  next();
});

app.use((req, res, next) => {
  const headers = require('./response/headers.json');
  Object.entries(headers).forEach(
    ([name, value]) => res.setHeader(name, value)
  );
  next();
});

app.use((req, res, next) => {
  const stream = fs.createReadStream('./response/body.bin');
  stream.on('end', () => next());
  stream.pipe(res);
});

app.use((req, res, next) => {
  res.end();
});

const port = parseInt(process.argv[2], 10) || 8080;
app.listen(port);
