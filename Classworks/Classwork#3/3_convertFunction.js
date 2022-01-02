const convertFunction = (functionStr) => {
  let isArrow = functionStr.indexOf("=>") !== -1;
  let res = "";
  let partition = functionStr.split(" ");

  if (!isArrow) {
    if (partition[1].length === 2) {
      res = partition[1] + " => " + partition[2];
    } else {
      let argumentsStart = partition[1].indexOf("(");

      res =
        "const " +
        partition[1].slice(0, argumentsStart) +
        " = " +
        partition[1].slice(argumentsStart) +
        " => " +
        partition[2];
    }
  } else {
    res += "function ";

    if (partition[2] !== "=") {
      res += partition[0] + " " + partition[2];
    } else {
      res += partition[1] + partition[3] + " " + partition[5];
    }
  }

  return res;
};
// console.log(convertFunction("function () {}"));
// console.log(convertFunction("function name() {}"));
// console.log(convertFunction("function name(str) {console.log(str);}"));
// console.log(convertFunction("() => {}"));
// console.log(convertFunction("const name = (str) => {console.log(str);}"));
// console.log(convertFunction("const name = () => {}"));
