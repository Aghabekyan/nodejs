var express = require('express');

var path = require('path');
var APIRouter = require('./routes/api');
var indexRouter = require('./routes/index');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use('/', indexRouter);
app.use('/api/', APIRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  res.status(404).send({ error: 'Not found' })
});

// error handler
app.use(function(err, req, res, next) {
  res.status(err.status || 500).send({ error: err })
});

module.exports = app;
