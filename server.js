'use strict';


const hof = require('hof');
let settings = require('./hof.settings');
const config = require('./config');

settings = Object.assign({}, settings, {
  routes: settings.routes.map(require),
  behaviours: settings.behaviours.map(require)
});

const app = hof(settings);

app.use((req, res, next) => {
  // Set HTML Language
  res.locals.htmlLang = 'en';
  // Set feedback link and phase banner
  res.locals.feedbackUrl = config.feedbackUrl;
  next();
});

module.exports = app;
