var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cheerio = require('cheerio');
var expressHandlebars = require('express-handlebars');
var mongoose = require('mongoose');
var request = require('request');
var logger = require('morgan');
var PORT = process.env.PORT || 8080












app.listen(PORT, function(){
  console.log("Server listening at " + PORT);
});