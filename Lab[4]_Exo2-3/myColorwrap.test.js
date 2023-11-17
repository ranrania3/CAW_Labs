// myColorwrap.test.js
const myColorModule = require('./myColorwrap');

test('Converts array to a string was successful', () => {
  const result = myColorModule.joinWithEmptyStringSeparator();
  expect(result).toBe('RedGreenWhiteBlack');
});

test('joins array elements was successful', () => {
  const result = myColorModule.joinWithDefaultSeparator();
  expect(result).toBe('Red,Green,White,Black');
});
