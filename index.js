const form = document.querySelector("form");
const userEmail = document.querySelector("#user-email");
const input = document.querySelector("#email");
const mainPage = document.querySelector(".main-content");
const successPageDesktop = document.querySelector(".success-login-desktop");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  userEmail.textContent = input.value;
  mainPage.classList.toggle("hide");
  successPageDesktop.classList.toggle("hide");

  input.value = "";
});

const removeSuccessMessage = () => {
  mainPage.classList.toggle("hide");
  successPageDesktop.classList.toggle("hide");
};
