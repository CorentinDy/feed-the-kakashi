let createError = require('http-errors');
let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
let bodyParser = require('body-parser');
let logger = require('morgan');

// feeder requirements
const Gpio = require('pigpio').Gpio;
const db = require('./utils/store');

// Init DB
db.check(); // Check if file is present
db.test(); // Test if table is created && connection

let indexRouter = require('./routes/index');
let usersRouter = require('./routes/users');
let feedRouter = require('./routes/feed');

let csrf = require('csurf');

let helmet = require('helmet');
let session = require('express-session');

// setup route middleware
let csrfProtection = csrf({ cookie: true });
let parseForm = bodyParser.urlencoded({ extended: false });

let app = express();
//secure the app
app.use(helmet());
app.disable('x-powered-by');
app.set('trust proxy', 1); // trust first proxy
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
app.use('/flatpickr', express.static(path.join(__dirname + '/node_modules/flatpickr/dist/')));
app.use('/notif', express.static(path.join(__dirname + '/node_modules/izitoast/dist/')));


app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/feed', feedRouter);

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

////////////////////////////////////////////////
// manage btn press for manual feeder trigger //
////////////////////////////////////////////////
//const button = new Gpio(14, {
//  mode: Gpio.INPUT,
//  pullUpDown: Gpio.PUD_UP,
//  alert: true
//});

// Level must be stable for 10 ms before an alert event is emitted.
//button.glitchFilter(10000);
//button.on('alert', (level, tick) => {
//  if (level === 0) {
//    feeder();
//  }
//});


module.exports = app;
