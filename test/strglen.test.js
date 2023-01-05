const slength = require('../jsmodules/strglen');
test('the length of string', () => {
    const text = slength('hello');
    expect(text).toBe(5);
  expect(slength('the length of the word')).toBe("error! enter again");
});