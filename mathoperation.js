const sum = require('./sum');
const subtract =  require('./subtract');
const multiply = require('./multiply');
const divide = require('./divide');
const square = require('./square');
const sroot = require('./sroot');

class MathOperations {
    static add(a = null, b = null) {
        return sum(a,b);
    }
    static difference(a = null, b = null) {
        return subtract(a,b);
    }
    static product(a,b) {
        return multiply(a,b);
    }
    static quotient(a,b) {
        return divide(a,b);
    }
    static squared(a) {
        return square(a);
    }
    static sqroot(a) {
        return sroot(a);
    }
}

module.exports = MathOperations;