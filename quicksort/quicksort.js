'use strict';

const quickSort = (array) => {
  if (array.length < 2) {
    return array;
  }
  const pivot = array[0];
  const keysAreLessPivot = array.slice(1).filter(key => key <= pivot);
  const keysAreMorePivot = array.slice(1).filter(key => key > pivot);
  return [
    ...quickSort(keysAreLessPivot),
    pivot,
    ...quickSort(keysAreMorePivot)
  ];
};

const tmp_arr = [3, 5, 2, 1, 6];
const tmp_arr_2 = [33, 3, 2, 33, 3, 53];

console.log(quickSort(tmp_arr));
console.log(quickSort(tmp_arr_2));
