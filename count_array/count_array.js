'use strict';

const count_element_array = (array) => {
  if (array.length === 0) {
    return 0;
  }
  else {
    array.shift();
    return 1 + count_element_array(array);
  }
};

const tmp_array = [1, 2, 3, 4];

console.log(count_element_array(tmp_array));
