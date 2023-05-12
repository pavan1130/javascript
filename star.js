const star_pattern = () => {
  for (let i = 0; i <= 4; i++) {
    for (let j = 0; j <= i; j++) {
      console.log("*");
    }
    console.log();
  }
};
star_pattern();
