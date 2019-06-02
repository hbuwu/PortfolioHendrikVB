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

let mainarea = document.querySelector("#mainarea");

window.addEventListener("scroll", function() {
      if (window.pageYOffset > 10) {
            mainarea.classList.remove("invisibleopacity");
      } else {
            mainarea.classList.add("invisibleopacity");
      }
});



let photoshop = document.querySelectorAll(".plinks")[0];
let indesign = document.querySelectorAll(".plinks")[1];
let illustrator = document.querySelectorAll(".plinks")[2];

photoshop.addEventListener("click", change_page_photoshop);
indesign.addEventListener("click", change_page_indesign);
illustrator.addEventListener("click", change_page_illustrator);

function change_page_photoshop(){
  window.location.href = "photoshop.html";
}

function change_page_indesign(){
  window.location.href = "indesign.html";
}

function change_page_illustrator(){
  window.location.href = "illustrator.html";
}
