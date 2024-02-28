#!/usr/bin/node
const { argv } = require('process');
const firstArgv = argv[2];
const secondArgv = argv[3];
const joinVar = ' is ';
console.log(firstArgv + joinVar + secondArgv);
