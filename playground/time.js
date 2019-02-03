const moment = require('moment');
// let date = moment();
// date.add(2, 'years').subtract(9, 'months');
// console.log(date.format('MMM Do, YYYY'));


// let month = new Date().getMonth();

// console.log(month);
let someTimestamp = moment().valueOf();
console.log(someTimestamp);

let createdAt = 1234;
let date = moment(createdAt);
console.log(date.format('h:mm a'));
