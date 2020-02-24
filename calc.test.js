const Calculator = require('./calc.js');

test('Calculator Divide 2 by  2 to equal 1', () => {
    let Calc = new Calculator();
    expect(Calc.Divide(2, 2)).toBe(1);
    expect(Calc.Result).toBe(1);

});
test('Calculator Add 2 by  2 to equal 4', () => {
    let Calc = new Calculator();
    expect(Calc.Add(2, 2)).toBe(4);
    expect(Calc.Result).toBe(4);

});
test('Calculator Multiply 2 by  2 has a result equal to 4', () => {
    let Calc = new Calculator();
    expect(Calc.Multiply(2, 2)).toBe(4);
    expect(Calc.Result).toBe(4);

});
test('Calculator Subtract 2 by  2 has a result equal to 0', () => {
    let Calc = new Calculator();
    expect(Calc.Subtract(2, 2)).toBe(0);
    expect(Calc.Result).toBe(0);

});
test('Calculator Square Root 4 has a result equal to 2', () => {
    let Calc = new Calculator();
    expect(Calc.SquareRoot(4)).toBe(2);
    expect(Calc.Result).toBe(2);

});
test('Calculator Square 2 has a result equal to 4', () => {
    let Calc = new Calculator();
    expect(Calc.Square(2)).toBe(4);
    expect(Calc.Result).toBe(4);

});