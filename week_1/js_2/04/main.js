const numbers = [0, 20, 10, 14, 1, 5, 70, 111, 12, 25];

console.log('original array:', numbers);

function sortArray(array) {
  return array.toSorted((a, b) => a - b);
}

console.log('sorted array:', sortArray(numbers));
