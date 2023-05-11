/* 
var:

-we can use var keyword , initilize and declare and reinitilizing redeclaration possiable


let:
- we can use to let keyword , initilize and declare and reinitilizing 

can not use redeclaration.


const:

- we can use the const keyword initialized and declare and reinitilizing

can not be reinitialized and redeclaration 
*/
let num = 121;
let temp = num;
let rev = 0;
while (num > 0) {
  let rem = num % 10;
  rev = rev * 10 + rem;
  num = num / 10;
}
if (temp == rev) {
  console.log(temp + "     -is a palidrome");
} else {
  console.log(temp + "     -is a not polidrame");
}

