const mainInput = document.querySelector("#mainInput");
const copyInput = document.querySelector("#copyInput");

function updateText(e) {
  copyInput.value = e.target.value;
}

mainInput.addEventListener("keyup", updateText);
