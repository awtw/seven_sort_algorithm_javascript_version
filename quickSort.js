const numbers = require('./array');

const quickSort = array => {
  if (array.length < 2) return array;
  const pivot = array[array.length - 1];
  const left = [];
  const right = [];
  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] < pivot) {
      left.push(array[i]);
    } else {
      right.push(array[i]);
    }
  }
  return [...quickSort(left), pivot, ...quickSort(right)];
};

console.log('quick sort ->');
console.log(quickSort(numbers));
