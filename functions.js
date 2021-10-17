export function getElement(DataJS, target = document) {
    return target.querySelector("[data-js=" + DataJS + "]");
  }
  
export function getAllElements(DataJS, target = document) {
    return target.querySelectorAll("[data-js=" + DataJS + "]");
  }