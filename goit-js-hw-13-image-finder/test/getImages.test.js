require('../src/index');

test('response', () => {
  expect(getImages('cat', 1)).toBeTruthy();
});
