const products = [
  { number: 1, price: 100, name: "Orange juice" },
  { number: 2, price: 200, name: "Soda" },
  { number: 3, price: 150, name: "Chocolate snack" },
  { number: 4, price: 250, name: "Cookies" },
  { number: 5, price: 180, name: "Gummy bears" },
  { number: 6, price: 500, name: "Condoms" },
  { number: 7, price: 120, name: "Crackers" },
  { number: 8, price: 220, name: "Potato chips" },
  { number: 9, price: 80, name: "Small snack" },
];

const isValid = (number, products) => {
  for (let i = 0; i < products.length; i++) {
    if (number === products[i].number) {
      return true;
    }
  }
  return false;
};

const isEnough = (money, productNumber, products) => {
  return money >= products[productNumber - 1].price;
};

const getChange = (money, price) => {
  const coins = [500, 200, 100, 50, 20, 10];
  const res = [];
  let change = money - price;

  while (change !== 0) {
    for (let i = 0; i < coins.length; i++) {
      if (change >= coins[i]) {
        res.push(coins[i]);
        change -= coins[i];
        break;
      }
    }
  }

  return res;
};

const vendingMachine = (products, money, productNumber) => {
  const res = {};

  if (!isValid(productNumber, products)) {
    return "Enter a valid product number";
  }
  if (!isEnough(money, productNumber, products)) {
    return "Not enough money for this product";
  }

  const { price, name } = products[productNumber - 1];
  res["product"] = name;
  res["change"] = getChange(money, price);

  return res;
};

console.log(vendingMachine(products, 200, 7));
console.log(vendingMachine(products, 500, 0));
console.log(vendingMachine(products, 90, 1));
