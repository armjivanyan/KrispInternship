const getFibonacciAt = (n) => {
  if (n == 1 || n == 2) {
    return 1;
  }

  let x1 = 1;
  let x2 = 1;
  let count = 2;

  while (count < n) {
    let tmp = x1;
    x1 = x2;
    x2 = tmp + x1;
    count++;
  }

  return x2;
};
//console.log(getFibonacciAt(10))
