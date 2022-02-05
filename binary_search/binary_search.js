'use strict';

const binarySearch = (array, element) => {
  let low = 0;
  let high = array.length - 1;
  let mid;
  while (low <= high) {
    mid = Math.floor((low + high) / 2);
    if (array[mid] > element) {
      high = mid - 1;
    }
    else if (array[mid] < element) {
      low = mid + 1;
    }
    //array[mid] === element
    else {
      return mid;
    }
  }
  return -1;
};

//Example
const sortedArray = [1, 5, 8, 10, 15, 20];
console.log(binarySearch(sortedArray, 1));//true
console.log(binarySearch(sortedArray, 5));//true
console.log(binarySearch(sortedArray, 23));//false
console.log(binarySearch(sortedArray, 9));//false
