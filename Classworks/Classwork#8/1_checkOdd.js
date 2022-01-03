const checkOdd = (num) => {
  if (Math.floor(num / 10) === 0) {
    return num % 2 === 1;
  }
  if (Math.floor(num % 2) === 0) {
    return false;
  }

  return checkOdd(Math.floor(num / 10));
};

// console.log(checkOdd(421133));
// console.log(checkOdd(71133));
// console.log(checkOdd(51193));
