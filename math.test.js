const math = require('./math.js');

test(
    'math test addition',
    () => {
        const result = math.addition(1, 2);
        expect(result).toBe(2);
    }
)