const express = require('express');
const path = require('path');

const port = 3001;
const staticdir = '/build';

const app = express();

app.use(express.static(path.resolve(`${__dirname}/${staticdir}`)));

app.get('*', (req, res) => {
  console.log(`Request: ${req.originalUrl}`);
  res.sendFile(path.resolve(`${__dirname}/${staticdir}`, 'index.html'));
});

app.use((err, req, res) => {
  if (err instanceof NotFound) {
    res.sendFile(path.resolve(`${__dirname}/${staticdir}`, 'index.html/404/'));
  }
});

app.listen(port, () => console.log(`Server started on port ${port}`));
