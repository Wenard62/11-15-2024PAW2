var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const expressLayout = require("express-ejs-layouts");
const connectDB = require("./app_api/models/db");

var fakultasRouter = require('./app_server/routes/fakultas');
var indexRouter = require('./app_server/routes/index');
var usersRouter = require('./app_server/routes/users');
var contactRouter = require('./app_server/routes/contact');
var prodiRouter = require('./app_server/routes/prodi');

const fakultasController = require("./app_api/routes/fakultas");
const prodiController = require("./app_api/routes/prodi");
const authRouterApi = require("../app_api");
var app = express();

// view engine setup
app.set('views', path.join(__dirname,'app_server', 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(expressLayout);

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/contact', contactRouter);
app.use('/prodi', prodiRouter);
app.use('/fakultas', fakultasRouter);
app.use('/api/fakultas', fakultasController);
app.use('/api/prodi', prodiController);
app.use('/api/auth', authRouterApi);

connectDB();

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
