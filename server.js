require('dotenv').config()
require('./config/database')


var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');

const CITY = require('./routes/cities');
const USER = require('./routes/newUsers');
const ITINERARY = require('./routes/itineraries')
const ACTIVITY = require('./routes/activity')
const COMMENT = require('./routes/comments')

//var usersRouter = require('./routes/users');

const cors = require('cors')
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(cors())

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/cities', CITY);
app.use('/auth', USER);
app.use('/myItineraries', ITINERARY)
app.use('/activities', ACTIVITY)
app.use('/comments', COMMENT)


//app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
 next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
