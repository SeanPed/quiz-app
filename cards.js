import { getAllElements } from "./functions.js";
import { getElement } from "./functions.js";

const cards = getAllElements("card");

export function toggleAnswersAndBookmarks() {
  cards.forEach((card) => {
    /*Area for toggling Bookmark*/
    const bookmark = getElement("bookmark", card);
    bookmark.addEventListener("click", () => {
      bookmark.classList.toggle("bookmark__active");
    });

    /*Area for toggling Answer-Buttons */
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
}
