const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(morgan('dev'));
app.use(express.static('dist'));
app.use(express.static('public'));

app.get('/', function(req, res) {
    res.send('Hello World');
})

module.exports = app;