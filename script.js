const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

menuToggle.addEventListener("click", () => {
  const isOpen = mainNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

mainNav.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    mainNav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

document.getElementById("year").textContent = new Date().getFullYear();

const feedback = document.getElementById("quizFeedback");
document.querySelectorAll(".quiz-option").forEach(button => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".quiz-option").forEach(option => option.classList.remove("selected"));
    button.classList.add("selected");
    if (button.dataset.answer === "right") {
      feedback.textContent = "Correct! “Libro” is masculine, so we say il libro.";
      feedback.style.color = "#bfe6c9";
    } else {
      feedback.textContent = "Not quite. The correct form is il libro. Try to remember: libro is masculine.";
      feedback.style.color = "#ffd0c3";
    }
  });
});
