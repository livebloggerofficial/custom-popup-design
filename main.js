const popupOverlay = document.querySelector(".popup-overlay");
const popupClose = document.querySelector(".popup-close");

popupClose.addEventListener("click", () => {
  popupOverlay.style.display = "none";
  localStorage.setItem("popupDisplayed", "true");
});

setTimeout(() => {
  if (!localStorage.getItem("popupDisplayed")) {
    popupOverlay.style.display = "block";
  }
}, 3000);
