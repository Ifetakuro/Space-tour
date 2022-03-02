"use strict";

//Add active class
let techLists = document.getElementById("pag-ul");
let techLink = techLists.getElementsByClassName("pag-li");

for (let i = 0; i < techLink.length; i++) {
  techLink[i].addEventListener("click", function () {
    var activeLink = document.getElementsByClassName("highlight");
    activeLink[0].className = activeLink[0].className.replace(" highlight", "");
    this.className += " highlight";
  });
}

//Display different pages
let techH1 = document.querySelector(".tech-h1");
let techP = document.querySelector(".tech-p");
let image = document.querySelector(".image");
let pag1 = document.querySelector(".pag-1");
let pag2 = document.querySelector(".pag-2");
let pag3 = document.querySelector(".pag-3");

let launchVehicleClick = (e) => {
  techH1.innerHTML = "LAUNCH VEHICLE";
  techP.innerHTML =
    "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!";
  image.src = "../images/launch-vehicle.png";
  image.alt = "Launch Vehicle";
};
pag1.addEventListener("click", launchVehicleClick);

let spacePortClick = (e) => {
  techH1.innerHTML = "SPACEPORT";
  techP.innerHTML =
    "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.";
  image.src = "../images/spaceport.png";
  image.alt = "Spaceport";
};
pag2.addEventListener("click", spacePortClick);

let spaceCapsuleClick = (e) => {
  techH1.innerHTML = "SPACE CAPSULE";
  techP.innerHTML =
    "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.";
  image.src = "../images/space-capsule.png";
  image.alt = "Space Capsule";
};
pag3.addEventListener("click", spaceCapsuleClick);
