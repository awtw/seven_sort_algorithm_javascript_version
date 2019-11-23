const numbers = require('./array');

function radixSort(array) {
  if (array.length < 2) return array;
  let maxValue = array[0];
  for (let i = 1; i < array.length; i++) {
    if (maxValue < array[i]) {
      maxValue = array[i];
    }
  }
  const interationCounter = maxValue.toString().length;
  for (let x = 0; x < interationCounter; x++) {
    const tempArray = Array.from({ length: 10 }, () => []);
    for (let i = 0; i < array.length; i++) {
      let digit = Math.floor(array[i] / Math.pow(10, x)) % 10;
      tempArray[digit].push(array[i]);
    }
    array = [].concat(...tempArray);
  }
  return array;
}

console.log('radix sort ->');
console.log(radixSort(numbers));
