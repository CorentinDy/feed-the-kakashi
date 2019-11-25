var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser')
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var csrf = require('csurf')

var helmet = require('helmet');
var session = require('express-session');

// setup route middlewares
var csrfProtection = csrf({ cookie: true })
var parseForm = bodyParser.urlencoded({ extended: false })

var app = express();
//secure the app
app.use(helmet());
app.disable('x-powered-by');
app.set('trust proxy', 1) // trust first proxy
app.use(session({
  secret: 'f33d7h3k4k45h1',
  name: 'sessionId',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true }
})
);


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/bts-css', express.static(path.join(__dirname + '/node_modules/bootstrap/dist/css')));
app.use('/bts-js', express.static(path.join(__dirname + '/node_modules/bootstrap/dist/js')));
app.use('/fa-css', express.static(path.join(__dirname + '/node_modules/@fortawesome/fontawesome-free/css/')));
app.use('/fa-js', express.static(path.join(__dirname + '/node_modules/@fortawesome/fontawesome-free/js/')));
app.use('/webfonts', express.static(path.join(__dirname + '/node_modules/@fortawesome/fontawesome-free/webfonts/')));
app.use('/flatpickr', express.static(path.join(__dirname + '/node_modules/flatpickr/dist/')))

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('pages/error');
});

module.exports = app;
