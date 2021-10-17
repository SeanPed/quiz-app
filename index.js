console.clear()

const cards = getAllElements("card");

cards.forEach((card) => {
  const button = getElement("toggle-answer", card);
  const answer = getElement("answer", card);
  const textShow = getElement("show", card);
  const textHide = getElement("hide", card);

  button.addEventListener("click", () => {
    answer.classList.toggle("hidden");
    textShow.classList.toggle("hidden");
    textHide.classList.toggle("hidden");
  });
});

function getElement(DataJS, target = document) {
  return target.querySelector("[data-js=" + DataJS + "]");
}

function getAllElements(DataJS, target = document) {
  return target.querySelectorAll("[data-js=" + DataJS + "]");
}
