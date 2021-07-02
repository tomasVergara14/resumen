var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var functionsRouter = require('./routes/functions')
var letConstRouter = require('./routes/letConst')
var operatorsRouter = require('./routes/operators')
var conditionalsRouter = require('./routes/conditionals')
var falsyRouter = require('./routes/falsy')
var switchRouter = require('./routes/switch')
var stringsRouter = require('./routes/strings')
var loopsRouter = require('./routes/loops')
var arraysRouter = require('./routes/array')

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/functions', functionsRouter)
app.use('/letconst', letConstRouter)
app.use('/operators', operatorsRouter)
app.use('/conditionals', conditionalsRouter)
app.use('/falsy', falsyRouter)
app.use('/switch', switchRouter)
app.use('/strings', stringsRouter)
app.use('/loops', loopsRouter)
app.use('/arrays', arraysRouter)

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
