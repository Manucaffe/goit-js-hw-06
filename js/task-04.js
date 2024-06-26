// TASK 4
let counterValue = 0;
const decrementButton = document.querySelector(
  'button[data-action="decrement"]'
);
const incrementButton = document.querySelector(
  'button[data-action="increment"]'
);

const valueSpan = document.querySelector("#value");
decrementButton.addEventListener("click", () => {
  counterValue -= 1;
  valueSpan.textContent = counterValue;
});

incrementButton.addEventListener("click", () => {
  counterValue += 1;
  valueSpan.textContent = counterValue;
});
