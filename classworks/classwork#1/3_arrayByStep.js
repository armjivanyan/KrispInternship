const arrayByStep = (a, b, step) => {
  let result = [a];
  let length = result.length;

  while (result[length - 1] + step <= b) {
    result.push(result[length - 1] + step);
    length++;
  }

  return result;
};
// console.log(arrayByStep(1, 5, 1));
// console.log(arrayByStep(10, 100, 20));
// console.log(arrayByStep(1, 5, 0.5));
