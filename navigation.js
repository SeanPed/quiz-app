import { getElement } from "./functions.js";

const buttonHome = getElement("button-home");
const buttonBookmarks = getElement("button-bookmarks");
const buttonCreate = getElement("button-create");
const buttonProfile = getElement("button-profile");

export function toggleNavigationButtons() {
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
}
