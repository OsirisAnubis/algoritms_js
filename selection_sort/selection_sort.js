'use strict';

const returnMin = (array) => {
  let smallest = array[0];
  let smallestIndex = 0;
  for (let i = 1; i < array.length; i++) {
    if (array[i] < smallest) {
      smallest = array[i];
      smallestIndex = i;
    }
  }
  return smallestIndex;
};

const selectionSort = (array) => {
  const tmpArray = [];
  const length = array.length;
  for (let i = 0; i < length; i++) {
    const smallestIndex = returnMin(array);
    tmpArray.push(array.splice(smallestIndex, 1)[0]);
  }
  return tmpArray;
};

//Example
const tmp_array = [2, 13, 54, 32, 12, 45, 75];
console.log(selectionSort(tmp_array));
