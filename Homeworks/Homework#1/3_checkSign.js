const checkMultiplicationSign = (n1, n2, n3) => {
  if (n1 === 0 || n2 === 0 || n3 === 0) {
    return "unsigned";
  }
  const sign1 = n1 < 0 ? 1 : 0;
  const sign2 = n2 < 0 ? 1 : 0;
  const sign3 = n3 < 0 ? 1 : 0;
  const signSum = sign1 + sign2 + sign3;
  if (sum === 1 || sum === 3) {
    return "-";
  }
  return "+";
};
// console.log(checkMultiplicationSign(-14, 5, 0));
// console.log(checkMultiplicationSign(-8, 9, -6));
// console.log(checkMultiplicationSign(4, 19, -2));
