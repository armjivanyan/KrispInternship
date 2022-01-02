const count = (n) => {
  if (Math.abs(n) < 10) {
    return 1;
  }
  return 1 + count(Math.floor(n / 10));
};

console.log(count(-314890));
