'use strict';

const max_rec_array = (array) => {
  let max = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i];
    }
  }
  return max;
};

const arr = [1, 23, 32, 3, 12, 23];

console.log(max_rec_array(arr));
