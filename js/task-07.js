// TASK 7
const inputFont = document.getElementById("font-size-control");
const spanText = document.getElementById("text");

inputFont.addEventListener("input", () => {
  spanText.style.fontSize = `${inputFont.value * 4}%`;
});