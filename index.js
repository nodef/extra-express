const express = require('express');



// REF: https://github.com/Abazhenov/express-async-handler/blob/master/index.js
const asyncUtil = fn => function asyncWrap(...args) {
  var out = fn(...args);
  var next = args[args.length-1];
  return Promise.resolve(out).catch(next)
}
express.async = asyncUtil;
module.exports = express;
