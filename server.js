var express = require('express');
var server = express();
var fs = require('fs');
var http = require('http');
var path = require('path');
var exphbs = require('express-handlebars');
var hbs = require('handlebars');
// var bootstrap = require('bootstrap');

var homeDat = require('./config/homeDat.json');
var portlandDat = require('./config/portlandDat.json');
var hawaiiDat = require('./config/hawaiiDat.json');
var gorgeDat = require('./config/gorgeDat.json');
var utahDat = require('./config/utahDat.json');

var port = process.env.PORT || 3000;

server.engine('handlebars', exphbs({defaultLayout: 'main'}));
server.set('view engine', 'handlebars');

server.use(express.static(path.join(__dirname, 'public')));

hbs.registerHelper('if_even', function(conditional, options) {
  if((conditional % 2) == 0) {
    return options.fn(this);
  } else {
    return options.inverse(this);
  }
});

hbs.registerHelper('if_home', function(conditional, options) {
  if(conditional == "home") {
    return options.fn(this);
  } else {
    return options.inverse(this);
  }
});

hbs.registerHelper('if_port', function(conditional, options) {
  if(conditional == "headerport") {
    return options.fn(this);
  } else {
    return options.inverse(this);
  }
});

hbs.registerHelper('if_hawaii', function(conditional, options) {
  if(conditional == "headerhawaii") {
    return options.fn(this);
  } else {
    return options.inverse(this);
  }
});

hbs.registerHelper('if_gorge', function(conditional, options) {
  if(conditional == "headergorge") {
    return options.fn(this);
  } else {
    return options.inverse(this);
  }
});

hbs.registerHelper('if_utah', function(conditional, options) {
  if(conditional == "headerutah") {
    return options.fn(this);
  } else {
    return options.inverse(this);
  }
});

server.get('/', function(req, res, next) {
  var templateArgs = {
    hType: "home",
    photoStuff: homeDat
  };
  // console.log(templateArgs);
  res.render('mainPage', templateArgs);
});

server.get('/portland', function(req, res, next) {
  var templateArgs = {
    hType: "headerport",
    photoStuff: portlandDat
  };
  // console.log(templateArgs);
  res.render('mainPage', templateArgs);
});

server.get('/hawaii', function(req, res, next) {
  var templateArgs = {
    hType: "headerhawaii",
    photoStuff: hawaiiDat
  };
  // console.log(templateArgs);
  res.render('mainPage', templateArgs);
});

server.get('/gorge', function(req, res, next) {
  var templateArgs = {
    hType: "headergorge",
    photoStuff: gorgeDat
  };
  // console.log(templateArgs);
  res.render('mainPage', templateArgs);
});

server.get('/utah', function(req, res, next) {
  var templateArgs = {
    hType: "headerutah",
    photoStuff: utahDat
  };
  // console.log(templateArgs);
  res.render('mainPage', templateArgs);
});

server.get('/:page/:index', function(req, res, next) {
  console.log("page request", req.params.page);
  console.log("index request", req.params.index);
});

server.get('*', function(req, res) {
  res.render('404Page');
});

server.listen(port, function() {
  console.log("Server running on port ", port);
});
