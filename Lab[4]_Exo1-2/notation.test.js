const mean = require('./notation');

test('mean function calculates the average correctly', () => {
  const scores = [80, 90, 75, 60];
  const result = mean(scores);
  expect(result).toBeCloseTo(76.25);
});
test('mean function calculates the average correctly', () => {
    const scores = [17, 30, 55, 9];
    const result = mean(scores);
    expect(result).toBeCloseTo(27.75);
  });
  
