const calculator = require('./calculator')

test('1 + 2 should return 3', () =>{
    expect(calculator.add(1, 2)).toBe(3);
    expect(calculator.substract(2, 1)).toBe(1);
    expect(calculator.multiply(2, 1)).toBe(2);
    expect(calculator.divide(2, 1)).toBe(2);
})