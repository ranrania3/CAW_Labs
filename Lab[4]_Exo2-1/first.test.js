const first = require('./first');
test ('Return first n elements of an array', () => {
    const array = [1, 2, 3, 4, 5];
    const n = 3;
    const result = first(array, n);
    expect(result).toEqual([1, 2, 3]);
});
test('returns an empty array if the array is null', () => {
    const array = null;
    const n = 3;
    const result = first(array, n);
    expect(result).toEqual([]);
  });
  test('returns an empty array if n is 0 or negative', () => {
    const array = [1, 2, 3, 4, 5];
    const n = -2;
    const result = first(array, n);
    expect(result).toEqual([]);
  });
  test('returns null array', () => {
    const array = [1, 2, 3, 4, 5];
    const result = first(array, null);
    expect(result).toEqual([]);
  });
  
  
  //we tested all the cases in the function provided