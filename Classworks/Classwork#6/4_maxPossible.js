function maxPossible(num1, num2) {
  let num1_arr = String(num1).split("");
  let num2_arr = String(num2).split("");
  num2_arr.sort((a, b) => b - a);

  for (let i = 0; i < num1_arr.length; i++) {
    if (num1_arr[i] < num2_arr[0]) {
      num1_arr[i] = num2_arr[0];
      num2_arr.shift();
    }
  }

  return Number(num1_arr.join(""));
}
console.log(maxPossible(523, 76));
console.log(maxPossible(9132, 5564));
console.log(maxPossible(8732, 91255));
