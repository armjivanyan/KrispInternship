const didPass = (grade1, grade2, grade3) => {
  const didPassed1 = grade1 >= 40 ? 1 : -1;
  const didPassed2 = grade2 >= 40 ? 1 : -1;
  const didPassed3 = grade3 >= 40 ? 1 : -1;
  const sum = grade1 + grade2 + grade3;
  const coefficent = didPassed1 + didPassed2 + didPassed3;
  if (coefficent === 3 || (coefficent === 1 && sum >= 150)) {
    return "Passed";
  }
  return "Not Passed";
};
// console.log(didPass(65, 70, 60));
// console.log(didPass(10, 85, 75));
// console.log(didPass(35, 25, 40));
// console.log(didPass(20, 40, 40));
