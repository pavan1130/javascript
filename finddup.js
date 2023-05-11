const finddupicate = (arr) => {
  let sortedarr = arr.sort();
  let res = [];
  for (let i = 0; i < sortedarr.length - 1; i++) {
    if (sortedarr[i + 1] === sortedarr[i]) {
      res.push(sortedarr[i]);
    }
  }
  return res;
};
let arr = [2, 5, 93, 69, 9, 69, 5];
console.log("The duplicate values :", finddupicate(arr));
