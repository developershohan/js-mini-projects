const progress = document.getElementById("progress");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const circles = document.querySelectorAll(".circle");
const contents = document.querySelectorAll(".content");

let currentActive = 1;

next.addEventListener("click", () => {
  currentActive++;
  if (currentActive > circles.length) {
    currentActive = circles.length;
  }
  update();
});
prev.addEventListener("click", () => {
  currentActive--;
  if (currentActive < 1) {
    currentActive = 1;
  }
  update();
});

function update() {

  circles.forEach((circle, index) => {
    if (index < currentActive) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });
  contents.forEach((content, index) => {
    if (index+1  == currentActive) {
      content.classList.add("active");
    } else {
      content.classList.remove("active");
    }
  });

  const actives = document.querySelectorAll(".circle.active");
  progress.style.width =
    ((actives.length - 1) / (circles.length - 1)) * 100 + "%";

  if (currentActive === 1) {
    prev.disabled = true;
  } else if (currentActive === circles.length) {
    next.disabled = true;
    next.innerText = "Finish"
  } else {
    prev.disabled = false;
    next.disabled = false;
    next.innerText = "Next"
  }
}
