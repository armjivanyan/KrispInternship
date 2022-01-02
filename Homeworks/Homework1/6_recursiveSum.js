const recSum = (n, negative = false) => {
  let denominator = n % 2 === 0 ? n - 1 : n;
  let x = 1 / denominator;
  if (x === 1) {
    return x;
  }
  if (Math.floor(denominator / 2) % 2 !== 0) {
    negative = true;
    x *= -1;
  }
  return x + recSum(denominator - 2, !negative);
};

console.log(recSum(8));
