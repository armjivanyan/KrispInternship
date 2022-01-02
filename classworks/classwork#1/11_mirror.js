const mirror = (str) => {
  // halfSize will also represent our center index, in case the length is odd
  const halfSize = Math.floor(str.length / 2);
  let result = str.substr(Math.ceil(str.length / 2), halfSize);

  if (str.length % 2 === 1) {
    result += str[halfSize];
  }

  result += str.substr(0, halfSize);
  return result;
};
// console.log(mirror("stranger"));
// console.log(mirror("rotator"));
