var fs=require('fs');
var path=require('path');
module.exports=function(dir,ext,callback){
  var ext='.'+ext;
  fs.readdir(dir,function(err,files){
    if(err){
      callback(err,null);
    }
    else{
      filelist=[];
      files.forEach(function(curr){
      if(path.extname(curr)==ext)
      filelist.push(curr) ;
    });
      callback(null,filelist);
    }
  });
};
