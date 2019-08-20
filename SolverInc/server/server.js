const express = require('express');
const path = require('path');

const app = express();
const server = require('http').Server(app);

const PORT = 8080;


const bodyparser = require('body-parser');

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, '../dist/SolverInc/')));


//Wildcard route
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/SolverInc/index.html'));
});


server.listen(PORT, (err) => {
  if (err) {
    console.log('There was an error connecting to the Server ', err);
  } else {
    console.log('You have connected to the server on PORT: ', PORT);
  }
});

// Catches all 404 routes.
app.use((error, req, res, next) => {
  if (res.headersSent) {
    return next(error);
  }
  res.status(500).send(error);
});

module.exports = app;
