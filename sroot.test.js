const root = require('./sroot.js');

test('finds root of 4 to equal 2', () => {
    expect(root(4)).toBe(2);
});