const image_container = document.getElementById("image_container");
const img = document.querySelectorAll(".imgs");
const dots = document.querySelector(".dots");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

let idx = 0;
let dotss = 0;

let interval = setInterval(run, 2000);
function run() {
  idx++;
  changeImgae();
}
let dot_content = "";

for (let i = 0; i < img.length; i++) {
  dotss++;
  dot_content += `<div class="dot"></div>`;
}

dots.innerHTML = dot_content;
const dot = document.querySelectorAll(".dot");

function resetInterval() {
  clearInterval(interval);
  interval = setInterval(run, 2000);
}

function changeImgae() {
  if (idx > img.length - 1) {
    idx = 0;
  } else if (idx < 0) {
    idx = img.length - 1;
  }
  dot.forEach((dot, index) => {
    if (idx === index) {
      dot.style.width = "15px";
      dot.style.height = "15px";
      dot.style.backgroundColor = "red";
    } else {
      dot.style.width = "10px";
      dot.style.height = "10px";
      dot.style.backgroundColor = "aqua";
    }

    dot.addEventListener("click", () => {
      console.log(idx);
      console.log(index);
      image_container.style.transform = `translateX(${-index * 350}px)`;
      resetInterval();
    });
  });
  image_container.style.transform = `translateX(${-idx * 350}px)`;
}

next.addEventListener("click", () => {
  idx++;
  changeImgae();
  resetInterval();
});
prev.addEventListener("click", () => {
  idx--;
  changeImgae();
  resetInterval();
});
