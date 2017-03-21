var http=require('http');
var fs=require('fs');
var port=process.argv[2];//port to listen to
var fh=process.argv[3];//file handler or path
var server=http.createServer(function(req,res){
  var file=fs.createReadStream(fh);
  file.pipe(res);
  //res.end();
});
server.listen(port)
