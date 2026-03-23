const numbers = [
  [0, 20, 10, 14, 1, 5, 70, 111, 12, 25],
  [24, 11, 10, 32, 1231],
  [1, 2, 3, 50, 23]
];

console.log('original arrays:', numbers);

function sortArray(array, order) {
  const result = array.toSorted((a, b) => a - b);
  if (order === 'asc') {
    return result;
  } else if (order === 'desc') {
    return result.toReversed();
  }
}

for (let array of numbers) {
  console.log('ASCENDING array:', sortArray(array, 'asc'));
  console.log('DESCENDING array:', sortArray(array, 'desc'));
}
