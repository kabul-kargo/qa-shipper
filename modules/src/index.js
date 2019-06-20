var greetings = require('./greetings.json');

var en = require('./en');
var ind = require('./in');

module.exports = {
    english: en,
    indonesian: ind
};

module.exports.spanish = function () {
  console.log(greetings.es)
};