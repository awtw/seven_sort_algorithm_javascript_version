const numbers = require('./array');

function bubbleSort(array) {
  const length = array.length;
  if (array.length < 2) return array;
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length; j++) {
      if (array[j] > array[j + 1]) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  return array;
}

console.log('bubble sort ->');
console.log(bubbleSort(numbers));
