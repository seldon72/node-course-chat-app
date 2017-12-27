var moment = require('moment');

// Jan 1 1970 00:00:00 am

// var date = new Date();
// console.log(date.getMonth());

var date = moment();
date.add(100, 'y').subtract(9, 'M').subtract(3, 'h');
console.log(date.format('MMM Do YYYY'));
console.log(date.format('hh:mm a'));

console.log(moment().startOf('year').fromNow());

var someTimestamp = moment().valueOf();
console.log(someTimestamp);

