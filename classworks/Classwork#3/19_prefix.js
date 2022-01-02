const prefix = (str) => {
  let partition = str.split(" ");
  let sign = partition[0];
  let num1 = partition[1];
  let num2 = partition[2];
  let res;

  switch (sign) {
    case "*":
      res = Number(num1) * Number(num2);
      break;
    case "/":
      res = Number(num1) / Number(num2);
      break;
    case "+":
      res = Number(num1) + Number(num2);
      break;
    case "-":
      res = Number(num1) - Number(num2);
      break;
  }

  return res;
};

const prefixAlternative = (str) => {
  //not a good idea to use eval, but still a solution
  let partition = str.split(" ");
  return eval(partition[1] + partition[0] + partition[2]);
};

console.log(prefix("+ 5 4"));
console.log(prefix("* 12 2"));
console.log(prefix("+ -10 10"));
// console.log(prefixAlternative("+ 5 4"));
// console.log(prefixAlternative("* 12 2"));
// console.log(prefixAlternative("+ -10 10"));
