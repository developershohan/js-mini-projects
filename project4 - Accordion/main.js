const faq_question = document.querySelectorAll(".faq_question");
const faq_content = document.querySelectorAll(".faq_content");
const expand_btn = document.querySelector(".expand_btn");
const close_btn = document.querySelector(".close_btn");



//  Accordion
faq_question.forEach((question, idx) => {
  question.addEventListener("click", () => {
    faq_content.forEach((answer, index) => {
      if (idx === index) {
        answer.classList.toggle("active");
      }
    });
  });
});

// toggle
// faq_question.forEach((question, idx) => {
//   question.addEventListener("click", () => {
//     faq_content.forEach((answer, index) => {
//       if (idx === index) {
//         answer.classList.toggle("active");
//     }else{
//           answer.classList.remove("active");

//       }
//     });
//   });
// });



expand_btn.addEventListener("click", () => {
  faq_content.forEach((answer) => {
    answer.classList.add("active");
    close_btn.style.display = "block";
    expand_btn.style.display = "none";
    
  });
});
close_btn.addEventListener("click", () => {
  faq_content.forEach((answer) => {
    answer.classList.remove("active");
    close_btn.style.display = "none";
    expand_btn.style.display = "block";
  });
});
