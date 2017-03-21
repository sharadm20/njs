var bl = require('bl');
var http = require('http');

var url = process.argv[2];

http.get(url, function (response) {
  response.setEncoding('utf8');
  response.pipe(bl(function (err,data) {
    var str=data.toString();
    if (err) {return console.error(err);
      }
    console.log(str.length);
    console.log(str);
  }));
});
