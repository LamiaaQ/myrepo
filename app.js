const and = require('./and');
const or = require('./or');
const not = require('./not');
let result = and([1, 0, 0, 1], [1, 1, 1, 0]);
let result2 = or([1, 1, 1, 1], [1, 1, 1, 0]);
let result3 = not([1, 1, 1, 0]);

console.log(result);
console.log(result2);
console.log(result3);