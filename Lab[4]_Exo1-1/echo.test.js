const exf = require('./echo');

console.log = jest.fn();

beforeEach(() => {
  console.log.mockClear();
});

test('exf function prints "echo" 5 times', () => {
  exf("echo", 5);
  expect(console.log).toHaveBeenCalledTimes(5);
  expect(console.log).toHaveBeenCalledWith('echo');
});

test('exf function prints "serverr" 10 times', () => {
  exf("serverr", 10);
  expect(console.log).toHaveBeenCalledTimes(10);
  expect(console.log).toHaveBeenCalledWith('serverr');
});
