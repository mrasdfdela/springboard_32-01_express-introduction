const express = require('express');
const ExpressError = require("./expressError");
const {
  parseInput,
  findMean,
  findMedian,
  findMode,
} = require("./app.helpers.js");

const app = express();
app.use( express.urlencoded( {extended:true}) );

app.get('/mean', function(req, res, next){
  let nums = parseInput(req);
  try {
    if (Array.isArray(nums)) {
      mean = findMean(nums) 
      return res.send(`${mean}`);
    } else {
      throw new ExpressError(nums, 400);
    }
  } catch (error) {
    return next(error);
  }
});

app.get('/median', function(req, res, next){
  let nums = parseInput(req);
  try {
    if (Array.isArray(nums)) {
      median = findMedian(nums);
      return res.send(`${median}`);
    } else {
      throw new ExpressError(nums, 400);
    }
  } catch (error) {
    return next(error);
  }
});

app.get('/mode', function(req, res, next){
  nums = parseInput(req);

  try {
    if (Array.isArray(nums)) {
      mode = findMode(nums);
      return res.send(`${mode}`);
    } else {
      throw new ExpressError(nums, 400);
    }
  } catch (error) {
    return next(error);
  }
});

app.use( (err, req, res, next) => {
  console.log(err)
  let status = err.status || 404;
  let msg = err.msg;

  return res.status(status).json({ error: {msg, status} });
});

app.listen(3000, function(req, res){
  console.log('Express Routing Exercises')
});