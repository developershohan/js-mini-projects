const small_cups = document.querySelectorAll(".small_cups");
const percentage = document.querySelector(".percentage");
const liters = document.getElementById("liters");
const remained = document.getElementById("remained");

updateBigCup();

small_cups.forEach((cup, index) => {
  cup.addEventListener("click", () => highlightcups(index));
  cup.addEventListener("mouseover", () => hoverhighlight(index));
  cup.addEventListener("mouseout", () => outhighlight(index));
});


function hoverhighlight(index){
    small_cups.forEach((cup, idx2) => {
        if (idx2 <= index) {
          cup.classList.add("hover");
        } else {
          cup.classList.remove("hover");
        }
      });
}
function outhighlight(index){
    small_cups.forEach((cup, idx2) => {
        if (idx2 <= index) {
            cup.classList.remove("hover");
        } 
      });
}
function highlightcups(index) {
  if (
    small_cups[index].classList.contains("full") &&
    !small_cups[index].nextElementSibling.classList.contains("full")
  ) {
    index--;
  }

  small_cups.forEach((cup, idx) => {
    if (idx <= index) {
      cup.classList.add("full");
    } else {
      cup.classList.remove("full");
    }
  });
  updateBigCup();
}
function updateBigCup() {
  const fullCups = document.querySelectorAll(".small_cups.full").length;

  const totalCups = small_cups.length;

  if (fullCups === 0) {
    percentage.style.visibility = "hidden";
    percentage.style.height = 0;
  } else {
    percentage.style.visibility = "visible";
    percentage.style.height = `${(fullCups / totalCups) * 330}px`;
    percentage.innerText = `${(fullCups / totalCups) * 100}%`;
  }
  if (fullCups === totalCups) {
    remained.style.visibility = "hidden";
    remained.style.height = 0;
  } else {
    remained.style.visibility = "visible";
    liters.innerText = `${2-(250 * fullCups /1000)}L`
  }
}
