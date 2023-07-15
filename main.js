const viewportWidth = window.innerWidth;
const image = document.querySelector("img");
if (viewportWidth < 500) {
  image.src = "./images/illustration-sign-up-mobile.svg";
} else {
  image.src = "./images/illustration-sign-up-desktop.svg";
}
const form = document.getElementById("myForm");
const emailInput = document.getElementById("email");
const errorMsg = document.getElementById("error-message");
emailInput.value = "";
form.addEventListener("submit", function (event) {
  const email = emailInput.value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(email)) {
    event.preventDefault();
    emailInput.style.backgroundColor = "hsla(4, 100%, 67%, 0.2)";
    emailInput.style.border = "1px solid hsl(4, 100%, 67%)";
    emailInput.style.color = "red";
    errorMsg.style.display = "inline";
  }
});
