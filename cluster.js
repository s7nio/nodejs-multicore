var cluster = require('cluster'); // https://github.com/LearnBoost/cluster
var app = require('./app');

cluster.schedulingPolicy = cluster.SCHED_RR; // round-robin
if(cluster.isMaster) {
  var cpuCount = require('os').cpus().length;
  console.log('Found %d CPUs', cpuCount);
  for (var i = 0; i < cpuCount; i += 1) {
    cluster.fork();
  }
} else {
  app(cluster);
}

cluster.on('fork', function(worker) {
	console.log('forked -> Worker %d', worker.id);
});