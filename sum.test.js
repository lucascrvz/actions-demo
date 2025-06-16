const sum = require('./sum')

test('Suma dos números', () => {
    expect(sum(1, 2)).toBe(3);
    expect(sum(-1, 1)).toBe(0);
    expect(sum(0, 0)).toBe(0);
    expect(sum(100, 200)).toBe(300);
    expect(sum(-100, -200)).toBe(-300);
});
