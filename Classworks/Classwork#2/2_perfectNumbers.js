const findPerfectNumbers = (n) => {
  let res = [];

  for (let i = 1; i <= n; i++) {
    if (isPerfect(i)) {
      res.push(i);
    }
  }

  return res;
};

const isPerfect = (num) => {
  let sumOfFactors = 0;

  for (let i = 1; i <= num / 2; i++) {
    if (num % i === 0) {
      sumOfFactors += i;
    }
  }

  return sumOfFactors === num;
};

// console.log(findPerfectNumbers(100))
