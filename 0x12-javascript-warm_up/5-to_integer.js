#!/usr/bin/node
const { argv } = require('process');
const myNo = 'My number: ';
if (!isNaN(parseInt(argv[2], 10))) console.log(myNo + parseInt(argv[2], 10));
else console.log('Not a number');
