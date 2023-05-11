const palidrome = (num) => {
  let rev = 0;
  let temp = num;

  while (num > 0) {
    let rem = num % 10;
    rev = rev * 10 + rem;
    num = Math.floor(num / 10);
  }
  if (rev == temp) {
    console.log(" is a palidrome ", temp);
  } else {
    console.log("is not a palidrome", temp);
  }
};
palidrome(121);
