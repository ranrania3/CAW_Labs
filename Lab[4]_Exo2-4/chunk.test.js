// chunk.test.js
const chunk = require('./chunk');

test('should return an empty array for an empty input array', () => {
  const result = chunk([], 2);
  expect(result).toEqual([]);
});

test('should return chunks of the specified size', () => {
  const array = [1, 2, 3, 4, 5, 6, 7, 8];
  const chunkSize = 3;
  const result = chunk(array, chunkSize);
  expect(result).toEqual([[1, 2, 3], [4, 5, 6], [7, 8]]);
});

test('should handle a chunk size larger than the array length', () => {
  const array = [1, 2, 3];
  const chunkSize = 5;
  const result = chunk(array, chunkSize);
  expect(result).toEqual([[1, 2, 3]]);
});

test('should handle a chunk size equal to the array length', () => {
  const array = [1, 2, 3];
  const chunkSize = 3;
  const result = chunk(array, chunkSize);
  expect(result).toEqual([[1, 2, 3]]);
});

test('should handle a chunk size of 1', () => {
  const array = [1, 2, 3, 4];
  const chunkSize = 1;
  const result = chunk(array, chunkSize);
  expect(result).toEqual([[1], [2], [3], [4]]);
});
