var http = require('http');
parseUrl(process.argv[2],function(){
  parseUrl(process.argv[3],function(){
    parseUrl(process.argv[4],function(){

      });
    });
  });
function parseUrl(url,callback){
var result='';
http.get(url, function (res) {
       res.setEncoding('utf8');

       res.on('data', function (chunk) {
           result += chunk;
       });

       res.on('end', function () {
           console.log(result);
           callback();
       });
   });

}
