const findAndRemove = (obj) => {
  let res = {};

  for (let key in obj) {
    let tmp = {};

    for (let nestedKey in obj[key]) {
      let converted = Number(obj[key][nestedKey]);

      if (!Number.isNaN(converted)) {
        tmp[nestedKey] = converted;
      }
    }
    res[key] = tmp;
  }

  return res;
};

const myObj = {
  bedroom: {
    slippers: "10000",
    piano: "550",
    call: "vet",
    travel: "world",
  },
};

console.log(findAndRemove(myObj));
