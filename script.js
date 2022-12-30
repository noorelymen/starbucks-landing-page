function imgSlider(anything) {
  document.querySelector(".starbucks").src = anything;
}

function changeColor(bgColor, color) {
  const circle = document.querySelector(".circle");
  const btn = document.querySelector(".btn");
  const span = document.querySelector("span");

  circle.style.background = bgColor;
  btn.style.background = color;
  span.style.color = color;
}
