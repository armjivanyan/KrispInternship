const options = ["Rock", "Paper", "Scissors"];

const startInput = () => {
  let input = [];
  input[0] = prompt("Enter the first value");
  if (input[0] === null) {
    return;
  }
  input[1] = prompt("Enter the second value");
  if (input[1] === null) {
    return;
  }
  while (options.indexOf(input[0]) === -1 || options.indexOf(input[1]) === -1) {
    alert("Invalid input try again");
    input[0] = prompt("Enter the first value");
    if (input[0] === null) {
      return;
    }
    input[1] = prompt("Enter the second value");
    if (input[1] === null) {
      return;
    }
  }
  return checkWinner(input[0], input[1]);
};

const checkWinner = (first, second) => {
  const i1 = options.indexOf(first);
  const i2 = options.indexOf(second);
  let winner;
  if (i1 === i2) {
    alert("Draw! Enter new values.");
    return startInput();
  }
  if (Math.abs(i2 - i1) === 1) {
    winner = i1 > i2 ? "1st player wins!" : "2nd player wins!";
  } else {
    winner = i1 > i2 ? "2nd player wins!" : "1st player wins!";
  }
  return alert(winner);
};
