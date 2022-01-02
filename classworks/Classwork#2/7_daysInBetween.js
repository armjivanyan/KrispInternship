const getDaysInBetween = (date1, date2) => {
  const days = (date2 - date1) / (1000 * 3600 * 24);

  return days;
};

// console.log(getDaysInBetween(new Date("December 29, 2018"),
// new Date("January 1, 2019")))
// console.log(getDaysInBetween(new Date("June 14, 2019"),
// new Date("June 20, 2019")))
