'use strict';

const binarySearch = (array, element) => {
  let i = 0;
  let j = array.length - 1;
  let mid = Math.floor((i + j) / 2);
  while (i !== j) {
    if (array[mid] > element) {
      j = mid - 1;
      mid = Math.floor((i + j) / 2);
    }
    else if (array[mid] < element) {
      i = mid + 1;
      mid = Math.floor((i + j) / 2);
    }
    else {//array[mid] === element
      return true;
    }
  }
  if (array[mid] === element) return true;
  else return false;
};

//Example
const sortedArray = [1, 5, 8, 10, 15, 20];
console.log(binarySearch(sortedArray, 1));//true
console.log(binarySearch(sortedArray, 5));//true
console.log(binarySearch(sortedArray, 23));//false
console.log(binarySearch(sortedArray, 9));//false
