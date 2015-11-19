# nodejs-multicore

Nodejs is a single-threaded platform. If you want to take heavy operations and use your multicore metal/CPUs, you need to fork it in multiple processes. This example use the nodejs cluster package, which use all your cores (e.g. from your Raspberry Pi 2).

## How to setup

`$ npm install express cluster`

`$ node cluster.js`
