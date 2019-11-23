const numbers = require('./array');

function heapSort(array) {
  if (array.length < 2) return array;
  let arrLength = array.length;
  for (let i = Math.floor(arrLength / 2) - 1; i >= 0; i--) {
    sortParentChild(array, arrLength, i);
  }
  for (let i = arrLength - 1; i > 0; i--) {
    swap(array, 0, i);
    arrLength--;
    sortParentChild(array, arrLength, 0);
  }
  return array;
}

function sortParentChild(array, arrLength, parentIndex) {
  const leftIndex = parentIndex * 2 + 1;
  const rightIndex = parentIndex * 2 + 2;
  let maxIndex = parentIndex;
  if (leftIndex < arrLength && array[leftIndex] > array[maxIndex]) {
    maxIndex = leftIndex;
  }
  if (rightIndex < arrLength && array[rightIndex] > array[maxIndex]) {
    maxIndex = rightIndex;
  }
  if (maxIndex !== parentIndex) {
    swap(array, maxIndex, parentIndex);
    sortParentChild(array, arrLength, maxIndex);
  }
}

function swap(array, index1, index2) {
  let temp = array[index1];
  array[index1] = array[index2];
  array[index2] = temp;
}

console.log('heap sort ->');
console.log(heapSort(numbers));
