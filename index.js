console.clear();

const cards = getAllElements("card");

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

    /*Area for showing which Nav Button is selected */
    const buttonHome = getElement("button-home");
    const buttonBookmarks = getElement("button-bookmarks");
    const buttonCreate = getElement("button-create");
    const buttonProfile = getElement("button-profile");

    buttonBookmarks.addEventListener("click", () => {
      buttonBookmarks.classList.add("button__active");
      buttonCreate.classList.remove("button__active");
      buttonHome.classList.remove("button__active");
      buttonProfile.classList.remove("button__active");
    });

    buttonCreate.addEventListener("click", () => {
      buttonBookmarks.classList.remove("button__active");
      buttonCreate.classList.add("button__active");
      buttonHome.classList.remove("button__active");
      buttonProfile.classList.remove("button__active");
    });

    buttonHome.addEventListener("click", () => {
      buttonBookmarks.classList.remove("button__active");
      buttonCreate.classList.remove("button__active");
      buttonHome.classList.add("button__active");
      buttonProfile.classList.remove("button__active");
    });

    buttonProfile.addEventListener("click", () => {
      buttonBookmarks.classList.remove("button__active");
      buttonCreate.classList.remove("button__active");
      buttonHome.classList.remove("button__active");
      buttonProfile.classList.add("button__active");
    });
  });
});

function getElement(DataJS, target = document) {
  return target.querySelector("[data-js=" + DataJS + "]");
}

function getAllElements(DataJS, target = document) {
  return target.querySelectorAll("[data-js=" + DataJS + "]");
}
