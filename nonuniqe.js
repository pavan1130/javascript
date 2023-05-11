// const arr = [89, 12, 2, 4, 12, 89, 35];
// let sort_arr = arr.slice().sort();
// let res = [];
// function gfg_Run() {
//   for (var i = 0; i < sort_arr.length - 1; i++) {
//     if (sort_arr[i + 1] == sort_arr[i]) {
//       res.push(sort_arr[i]);
//     }
//   }
//   return res;
// }
// gfg_Run();

const array = [2, 3, 4, 67, 2, 54, 67, 3];

let dup = array.filter((value, index) => {
  return array.indexOf(value) === array.lastIndexOf(value);
});
console.log(dup);
