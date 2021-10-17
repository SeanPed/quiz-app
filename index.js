console.clear();

const cards = getAllElements("card");

cards.forEach((card) => {
  /*Area for toggling Bookmark*/
  const bookmark = getElement("bookmark", card);
  bookmark.addEventListener("click", () => {
    bookmark.classList.toggle("bookmark--active");
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

    /*Area for showing which Nav Button is selected */
    const buttonHome = document.querySelector(".js-button-home");
    const buttonBookmarks = document.querySelector(".js-button-bookmarks");
    const buttonCreate = document.querySelector(".js-button-create");
    const buttonProfile = document.querySelector(".js-button-profile");

    buttonBookmarks.addEventListener("click", () => {
      buttonBookmarks.classList.add("button--active");
      buttonCreate.classList.remove("button--active");
      buttonHome.classList.remove("button--active");
      buttonProfile.classList.remove("button--active");
    });
  });
});

function getElement(DataJS, target = document) {
  return target.querySelector("[data-js=" + DataJS + "]");
}

function getAllElements(DataJS, target = document) {
  return target.querySelectorAll("[data-js=" + DataJS + "]");
}
