var http=require('http');
var port=process.argv[2];
var net=require('net');
var strftime=require('strftime');
var server=net.createServer(function(socket){
var date=new Date();
/*var yr=date.getFullYear();
var mnth=date.getMonth()+1;
if(mnth<10){mnth="0"+mnth;}
var day=date.getDate();
if(day<10){day="0"+day;}
var hr=date.getHours();
if(hr<10){hr="0"+hr;}
var min=date.getMinutes();
if(min<10){min="0"+min;}
*/
//var t=strftime('%F %I:%M',date);
socket.end(strftime('%F %I:%M',date)+'\n');

});
server.listen(port);
