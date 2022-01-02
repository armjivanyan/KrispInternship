const books = [
  { book: "Catcher in the Rye", readStatus: true, percent: 40 },
  { book: "Animal Farm", readStatus: true, percent: 20 },
  { book: "Solaris", readStatus: false, percent: 90 },
  { book: "The Fall", readStatus: true, percent: 50 },
  { book: "White Nights", readStatus: false, percent: 60 },
  { book: "After Dark", readStatus: true, percent: 70 },
];

const sortReadByPercent = (arr) => {
  let res = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].readStatus) {
      res.push(arr[i]);
    }
  }

  res.sort((x, y) => y.percent - x.percent);
  return res;
};
// console.log(sortReadByPercent(books));
