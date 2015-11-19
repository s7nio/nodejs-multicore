module.exports = function(cluster) {

  var express = require('express');
  var uuid = require('uuid');
  var app = express();

  app.get('/',function(req, res){
    var uid = uuid.v4();
    var startTime = new Date();
    console.log('Worker %d started \t ('+ uid +')', cluster.worker.id);
    for (var i = 0; i < 1001001001; i++) {  } // heavy loop
    res.end('Worker '+ cluster.worker.id +' say hello.');
    console.log('Worker %d returned \t ('+ uid +' - duration '+ Math.ceil(new Date() - startTime) +' ms)', cluster.worker.id);
  });

  app.listen(1337,function(){
    console.log('Application started. Worker %d started. Process %d.', cluster.worker.id, cluster.worker.process.pid);
  });
}