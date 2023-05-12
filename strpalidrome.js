const strpalidrome = (str) => {
  let str2 = "";
  for (let i = str.length - 1; i >= 0; i--) {
    str2 = str2 + str[i];
  }
  if (str === str2) {
    console.log(str2, " is a palidrome string");
  } else {
    console.log(str2, "is a not a palidrome");
  }

  return str2;
};
strpalidrome("pavan");
