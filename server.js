var express = require('express');
var server = express();
var fs = require('fs');
var path = require('path');
var exphbs = require('express-handlebars');

var photoData = require('./photoData.json');

var port = process.env.PORT || 3000;

server.engine('handlebars', exphbs({defaultLayout: 'main'}));
server.set('view engine', 'handlebars');

server.use(express.static(path.join(__dirname, 'public')));

server.get('/', function(req, res, next) {
  var templateArgs = {
    photoStuff: photoData
  };
  console.log(templateArgs);
  res.render('mainPage', templateArgs);
});

// server.get('/twits', function(req, res, next) {
//   var templateArgs = {
//     twitStuff: photoData,
//     modal: false
//   };
//   console.log(templateArgs);
//   res.render('twitPage', templateArgs);
// });
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
