const capitalizeString = require('../jsmodules/capitalize');
test('this capitalize string', () => {
  expect(capitalizeString('hello')).toBe("Hello");
});