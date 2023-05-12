const big_Element = (arr) => {
  let big = [];
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > big) {
      big = arr[i];
    }
  }
  return big;
};
console.log(big_Element([2, 3, 4, 56, 4, 5]));
