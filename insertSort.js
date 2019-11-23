const numbers = require('./array');

function insertSort(array) {
  const length = array.length;
  for (let i = 0; i < length; i++) {
    if (array[i] < array[0]) {
      array.unshift(array.splice(i, 1)[0]);
    } else {
      if (array[i] < array[i - 1]) {
        for (let j = 0; j < i; j++) {
          if (array[i] > array[j - 1] && array[j] > array[i]) {
            array.splice(j, 0, array.splice(i, 1)[0]);
          }
        }
      }
    }
  }
  return array;
}

console.log('inserst sort ->');
console.log(insertSort(numbers));
