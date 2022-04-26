const questions = $(".accordion-button");
const panels = $(".panel");

questions.forEach(function() {
  question.addEventListener("click", function() {
    this.classList.toggle("active")
  });
});
