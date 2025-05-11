document.getElementById("animateBtn").addEventListener("click", function () {
  const button = this;
  button.classList.add("animate");

  // Remove the animation class after 300ms to reset
  setTimeout(() => {
    button.classList.remove("animate");
  }, 300);
});
document.getElementById("animateBtn").addEventListener("click", function () {
  const body = document.body;
  body.style.transition = "background-color 0.5s ease";
  body.style.backgroundColor = getRandomColor();
});

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
let clickCount = 0;

document.getElementById("animateBtn").addEventListener("click", function () {
  clickCount++;
  const counter = document.getElementById("counter");
  counter.textContent = `Button clicked: ${clickCount} times`;
});