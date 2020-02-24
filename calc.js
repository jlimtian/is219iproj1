/*
const sum = require('./sum');
const multiply = require('./multiply');
const divide = require('./divide');
const subtract = require('./subtract.js');
const square = require('./square.js');
const root = require('./sroot.js');
*/
const mathOperations = require('./mathoperation');

class calc{

    Add(a,b) {
        return this.Result = mathOperations.add(a, b);
    }
    Divide(a,b) {
        return this.Result = mathOperations.quotient(a,b);
    }
    Multiply(a,b) {
        return this.Result = mathOperations.product(a,b);
    }

    Subtract(a,b) {
        return this.Result = mathOperations.difference(a,b);
    }

    SquareRoot(a) {
        return this.Result = mathOperations.sqroot(a);
    }

    Square(a) {
        return this.Result = mathOperations.squared(a);
    }
}

module.exports = calc;
