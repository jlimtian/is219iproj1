const multiply = require('./multiply');

test('multiplies 2 by 2 to equal 4', () => {
    expect(multiply(2, 2)).toBe(4);
});
