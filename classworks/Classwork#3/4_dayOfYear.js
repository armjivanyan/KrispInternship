const dayOfYear = (date) => {
  let partition = date.split("/");
  const startOfTheYear = new Date(Number(partition[2]), 0, 1);
  const givenDay = new Date(
    Number(partition[2]),
    Number(partition[0]) - 1,
    Number(partition[1]) + 1
  );

  return (givenDay - startOfTheYear) / (1000 * 60 * 60 * 24);
};

// console.log(dayOfYear("12/13/2020"));
// console.log(dayOfYear("12/17/2020"));
// console.log(dayOfYear("11/16/2020"));
// console.log(dayOfYear("1/9/2019"));
