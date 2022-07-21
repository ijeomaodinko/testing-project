const reverseString = require('../jsmodules/reverseString');
test('the reverse of string', () => {
  expect(reverseString('hello')).toBe("olleh");
});