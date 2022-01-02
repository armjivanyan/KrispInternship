const numberTriangle = (n) => {
  let res = [];
  let row = "";

  for (let i = 1; i < 2 * n; i++) {
    if (i <= n) {
      row += i;
      res.push(row);
    } else {
      res.push(res[i - (i - n) * 2 - 1]);
    }
  }

  res = res.join("\n");
  return res;
};
//   console.log(numberTriangle(5))

const borromRightTriangle = (n) => {
  let res = Array(n).fill(" ").join("");

  for (let i = 1; i <= n; i++) {
    res += i;
    res = res.substring(1);
    console.log(res);
  }
};
// borromRightTriangle(5);

const topRightTriangle = (n) => {
  let res = "";

  for (let i = 1; i <= n; i++) {
    res += i;
  }

  for (let i in res) {
    console.log(res);
    res = res.substring(0, res.length - 1);
  }
};
// topRightTriangle(5);

const drawX = (n) => {
  let rows = []; //array to store the first half of rows, to use them later
  let midRow = Math.floor(n / 2); //mid value
  let even = n % 2 === 0; // boolen to check if the input number is even or not

  for (let i = 0; i < n; i++) {
    let row = []; // array to store the symbols of current row

    if (i <= midRow) {
      //if we are in the top half, create the row, and push the string into our rows array
      row[i] = "x";
      row[n - 1 - i] = "x";
      rows.push(row.join(" "));
      console.log(rows[i]);
    } else {
      // for the bottom half, use corresponding row from rows array, as they are symmetric and repeating
      console.log(rows[i - (i - midRow) * 2 - even]);
    }
  }
};
// drawX(9);
// drawX(10);
