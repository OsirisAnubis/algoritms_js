const rec_sum = (array) => {
  if (array.length === 0) {
    return 0; 
  }
  else {
    const tmp_array = [...array];
    tmp_array.shift();
    return rec_sum(tmp_array) + array[0];
  }
};

const tmp_arr = [1, 2, 3, 5];

console.log(rec_sum(tmp_arr));
