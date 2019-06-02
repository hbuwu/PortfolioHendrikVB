let hamburger = document.querySelector(".dropdown");
let dropdown = document.querySelector("nav");

hamburger.addEventListener("click", showDropdown);

function showDropdown() {

  if (dropdown.classList.contains("invisible")) {

    dropdown.classList.add("show");

  }

}

let main = document.querySelector("main");

main.addEventListener("click", removeDropdown);

function removeDropdown() {

  if (dropdown.classList.contains("show")) {

    dropdown.classList.remove("show");

  }

}

let lightSwitch = document.querySelector("#modeswitch");

lightSwitch.addEventListener("click", switchMode);

function switchMode() {

  let linkObject = document.querySelector("#switchcss");

  let currentStyle = linkObject.getAttribute("href");

  if (currentStyle === "stijl-dark.css") {

    linkObject.setAttribute("href", "stijl-light.css");
    lightSwitch.innerHTML = "Dark Mode";

  }

  else {
    linkObject.setAttribute("href", "stijl-dark.css");
    lightSwitch.innerHTML = "Light Mode";
  }

}
