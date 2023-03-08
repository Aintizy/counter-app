let counter = 0;
const counterEl = document.getElementById("counter");

function increase() {
  counter++;
  counterEl.innerText = counter;
}

function decrease() {
  if (counter > 0) {
    counter--;
    counterEl.innerText = counter;
  }
}
