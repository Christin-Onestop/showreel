const mealsContainer = document.getElementById("meals");

mealsContainer.addEventListener("click", (e) => {
  const mealEl = e.target.closest(".meal");
  if (!mealEl || mealEl.classList.contains("work-card-soon")) return;

  const url = mealEl.getAttribute("data-url");
  if (url) {
    window.open(url, "_blank");
  }
});
