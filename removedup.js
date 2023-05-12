const dup_arr = (arr) => {
  let set = new Set(arr);
  let arr_set = Array.from(set);

  return arr_set;
};

console.log(dup_arr([1, 2, 3, 4, 2, 3, 4, 1, 5]));
