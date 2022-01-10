const printSquare = (height) => {
  let res = "";
  let fullRow = "";
  let sidesRow = "";
  for (let i = 0; i < height - 1; i++) {
    fullRow += " * ";
    if (i === 0 || i === height - 2) {
      sidesRow += " * ";
    } else {
      sidesRow += "   ";
    }
  }
  for (let i = 0; i < height; i++) {
    if (i === 0 || i === height - 1) {
      res += fullRow + "\n";
    } else {
      res += sidesRow + "\n";
    }
  }
  return res;
};
// console.log(printSquare(7));
