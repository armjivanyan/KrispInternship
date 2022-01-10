const solveQuadraticEquation = (a, b, c) => {
  if (a === 0) {
    return "Enter valid constans";
  }
  const d = Math.pow(b, 2) - 4 * a * c;
  if (d < 0) {
    return "Solution does not exists";
  } else if (d === 0) {
    const x = (-1 * b) / (2 * a);
    return `Solution is ${x}`;
  }
  const x1 = (-1 * b - Math.sqrt(d)) / (2 * a);
  const x2 = (-1 * b + Math.sqrt(d)) / (2 * a);
  return `Solutions are ${x1} and ${x2}`;
};
// console.log(solveQuadraticEquation(1, 2, 1));
// console.log(solveQuadraticEquation(0, 4, -5));
// console.log(solveQuadraticEquation(3, -8, 12));
// console.log(solveQuadraticEquation(5, -13, 6));
