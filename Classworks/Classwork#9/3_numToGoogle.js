function numToGoogle(args) {
  const numbers = args.join("");
  const numbersArr = numbers.split("");
  let res = [];

  for (let i = 0; i < numbersArr.length; i++) {
    switch (numbersArr[i]) {
      case "1":
        res.push("g");
        break;
      case "2":
        res.push("o");
        break;
      case "3":
        res.push("l");
        break;
      case "4":
        res.push("e");
        break;
      case "0":
        const temp = res.pop();
        res.push(temp, temp);
        break;
      case "5":
        res[res.length - 1] = res[res.length - 1].toUpperCase();
        break;
      case "6":
        res.push(".");
        break;
      case "7":
        res[0] = res[0].toUpperCase();
        break;
      case "8":
        res.reverse();
        break;
      case "9":
        res = [];
        break;
      default:
        console.log("invalid input");
    }
  }
  return res.join("");
}

// console.log(numToGoogle(["15", "25025", "15", "3545"]));
