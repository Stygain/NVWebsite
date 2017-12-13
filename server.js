var express = require('express');
var server = express();
var fs = require('fs');
var path = require('path');
var exphbs = require('express-handlebars');
var hbs = require('handlebars');

var homeDat = require('./homeDat.json');
var portlandDat = require('./portlandDat.json');
var hawaiiDat = require('./hawaiiDat.json');
var gorgeDat = require('./gorgeDat.json');
var utahDat = require('./utahDat.json');

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
  console.log(templateArgs);
  res.render('mainPage', templateArgs);
});

server.get('/portland', function(req, res, next) {
  var templateArgs = {
    hType: "headerport",
    photoStuff: portlandDat
  };
  console.log(templateArgs);
  res.render('mainPage', templateArgs);
});

server.get('/hawaii', function(req, res, next) {
  var templateArgs = {
    hType: "headerhawaii",
    photoStuff: portlandDat
  };
  console.log(templateArgs);
  res.render('mainPage', templateArgs);
});

server.get('/gorge', function(req, res, next) {
  var templateArgs = {
    hType: "headergorge",
    photoStuff: portlandDat
  };
  console.log(templateArgs);
  res.render('mainPage', templateArgs);
});

server.get('/utah', function(req, res, next) {
  var templateArgs = {
    hType: "headerutah",
    photoStuff: portlandDat
  };
  console.log(templateArgs);
  res.render('mainPage', templateArgs);
});


//
// server.get('/twits/:index', function(req, res, next) {
//   console.log("index request", req.params);
//   var tw = req.params.index;
//   var twit = photoData[tw];
//   if (twit) {
//     var templateArgs = {
//       text: twit.text,
//       author: twit.author
//     };
//     templateArgs2 = {
//       twitStuff: [templateArgs],
//       modal: false
//     };
//     console.log(templateArgs);
//     console.log(templateArgs2);
//     res.render('twitPage', templateArgs2);
//   }
//   else {
//     next();
//   }
//   //
//   // Object.keys(photoData).forEach(function (twit) {
//   //   var twit = photoData[twit];
//   //   console.log(twit);
//   // });
// });

server.get('*', function(req, res) {
  res.render('404Page');
});

server.listen(port, function() {
  console.log("Server running on port ", port);
});
