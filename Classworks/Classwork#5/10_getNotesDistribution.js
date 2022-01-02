const validNotes = [1, 2, 3, 4, 5];
function getNotesDistribution(arr) {
  const res = arr.reduce((grades, { notes }) => {
    for (let grade of notes) {
      if (validNotes.includes(grade)) {
        grades.hasOwnProperty(grade) ? grades[grade]++ : (grades[grade] = 1);
      }
    }
    return grades;
  }, {});
  return res;
}

const data = [
  {
    name: "Steve",
    notes: [5, 5, 3, -1, 6],
  },
  {
    name: "John",
    notes: [3, 2, 5, 0, -3],
  },
];
// console.log(getNotesDistribution(data));
