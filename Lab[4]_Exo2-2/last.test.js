const last = require('./last');
test('returns an empty array if the input array is null or undefined', () => {
    const array = null;
    const n = 3;
    const result = last(array, n);
    expect(result).toEqual([]);
  });
  test('returns the last element if n is null or undefined', () => {
    const array = [1, 2, 3, 4, 5];
    const result = last(array, null);
    expect(result).toBe(5);
  });
  test('returns the last n elements of the array', () => {
    const array = [1, 2, 3, 4, 5];
    const n = 3;
    const result = last(array, n);
    expect(result).toEqual([3, 4, 5]);
  });
  
  test('returns an empty array if n is 0 or negative', () => {
    const array = [1, 2, 3, 4, 5];
    const n = -3;
    const result = last(array, n);
    expect(result).toEqual([]);
  });
  
  test('returns the whole array if n is greater than or equal to the array length', () => {
    const array = [1, 2, 3, 4, 5];
    const n = 8;
    const result = last(array, n);
    expect(result).toEqual([1, 2, 3, 4, 5]);
  });