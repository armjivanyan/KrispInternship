let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const getDay = (str) => {
  let date = new Date(str);
  return days[date.getDay()];
};

const formatDate = (date) => {
  return `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`;
};

const getWeekOfMonth = (date) => {
  return Math.floor(date.getDate() / 7) + 1;
};

// console.log(getDay("12/07/2016"));
// console.log(getDay("09/04/2016"));
// console.log(getDay("12/08/2011"));
// console.log(formatDate(new Date("2020-05-14")));
// console.log(getWeekOfMonth(new Date(2017, 10, 9)));
