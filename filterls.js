var fs=require('fs');
var dir=process.argv[2];
var ext=process.argv[3];
var reg=RegExp('\\.'+ext+'$');
var ls=fs.readdir(dir,function(err,list){
  for(i=0;i<list.length;i++){
    if(reg.test(list[i]))
    console.log(list[i]);
  }

});
