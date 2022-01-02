const data = [
  {
    name: "Manchester United",
    wins: 30,
    loss: 3,
    draws: 5,
    scored: 88,
    conceded: 20,
  },
  {
    name: "Arsenal",
    wins: 24,
    loss: 6,
    draws: 8,
    scored: 98,
    conceded: 29,
  },
  {
    name: "Chelsea",
    wins: 22,
    loss: 8,
    draws: 8,
    scored: 98,
    conceded: 29,
  },
];

const champions = (data) => {
  const finalRes = [];
  let points = 0;
  let difference = 0;

  for (let i = 0; i < data.length; i++) {
    let { name, wins, loss, draws, scored, conceded } = data[i];
    points = 3 * wins + 0 * loss + 1 * draws;
    difference = scored - conceded;

    finalRes.push({
      name: name,
      points: points,
      difference: difference,
    });
  }
  finalRes.sort((a, b) => {
    return b["points"] - a["points"];
  });

  if (finalRes[0]["points"] != finalRes[1]["points"]) {
    return finalRes[0].name;
  } else if (finalRes[0]["difference"] > finalRes[1]["difference"]) {
    return finalRes[0].name;
  }
  return finalRes[1].name;
};

console.log(champions(data));
