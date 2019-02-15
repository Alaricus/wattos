const express = require('express');
const path = require('path');

const port = 3001;
const staticdir = '/build';

const app = express();

// Static assets, i.e. the React app as well as all other subfolders of the site.
app.use(express.static(path.resolve(`${__dirname}/${staticdir}`)));

// All other routes redirect to the app because it uses internal react-router.
app.get('*', (req, res) => {
  console.log(`Request: ${req.originalUrl}`);
  res.sendFile(path.resolve(`${__dirname}/${staticdir}`, 'index.html'));
});

// Pick up all other NotFound routes and reditect to the 404 page.
app.use((err, req, res) => {
  if (err instanceof NotFound) {
    res.sendFile(path.resolve(`${__dirname}/${staticdir}`, 'index.html/404/'));
  }
});

app.listen(port, () => console.log(`Server started on port ${port}`));
