#!/usr/bin/env node

var spawn = require('child_process').spawn
var join = require('path').join

var app = spawn('npm', ['start'], { 
  stdio: 'inherit'
}).on('exit', function (i, m) {
  process.exit()
})
