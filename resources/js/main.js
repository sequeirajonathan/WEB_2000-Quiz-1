let button = document.getElementById("see-btn");
let logo = document.getElementById("logo");
let toggle = false;

button.addEventListener("click", () => {
  if (toggle) {
    logo.src = "resources/images/Awesome-Logo.png";
    toggle = false;
  } else {
    logo.src = "resources/images/glasses.gif";
    toggle = true;
  }
});
