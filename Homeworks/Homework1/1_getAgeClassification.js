export const getAgeClassification = (age, timeMeasure) => {
  let answer;
  switch (timeMeasure) {
    case "months":
      if (age >= 1 && age <= 12) {
        answer = "baby";
      }
      break;
    case "years":
      switch (true) {
        case age >= 18:
          answer = "adult";
          break;
        case age >= 13:
          answer = "teenager";
          break;
        case age >= 3:
          answer = "child";
          break;
        case age >= 1:
          answer = "toddler";
          break;
      }
      break;
    default:
      answer = "invalid input";
      break;
  }
  return answer;
};
// console.log(getAgeClassification(45, "years"));
// console.log(getAgeClassification(3, "years"));
// console.log(getAgeClassification(8, "months"));
