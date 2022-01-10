import { getDate } from "./helpers/getDate.js";
const getDateButton = document.querySelector(".getDate");
const dateArea = document.querySelector(".dateArea");

function changeDateArea() {
  dateArea.innerText = getDate();
}

getDateButton.addEventListener("click", changeDateArea);
