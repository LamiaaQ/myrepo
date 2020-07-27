const bitwise = require('bitwise');

module.exports = function(operand){
    return bitwise.bits.not(operand);
}