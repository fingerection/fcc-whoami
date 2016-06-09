var express = require('express');
var app = express();

app.get('/api/whoami/', function (req, res) {
  var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  var languageString = req.headers["accept-language"];
  var uaString = req.headers['user-agent'];
  
  var language = languageString.split(';')[0].split(',')[0];
  var uaMatch = uaString.match(/\([^\)]+\)/)[0];
  var software = uaMatch.slice(1, uaMatch.length-1)
  
  //Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_5)
  res.send({ipaddress: ip, language: language,
  software: software});
});

var port = process.env.PORT || 8080;
app.listen(port,  function () {
  console.log('Example app listening on port'+port);
});