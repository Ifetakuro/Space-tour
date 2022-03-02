"use  strict";

//Add active class
let crewLists = document.getElementById("crew-lists");
let crewLink = crewLists.getElementsByClassName("crew-list");

for (let i = 0; i < crewLink.length; i++) {
  crewLink[i].addEventListener("click", function () {
    var activeLink = document.getElementsByClassName("highlight");
    activeLink[0].className = activeLink[0].className.replace(" highlight", "");
    this.className += " highlight";
  });
}

//Display different pages

let crewRole = document.querySelector(".crew-role");
let crewH1 = document.querySelector(".crew-h1");
let crewP = document.querySelector(".crew-p");
let image = document.querySelector(".image");
let dot1 = document.querySelector(".dot-1");
let dot2 = document.querySelector(".dot-2");
let dot3 = document.querySelector(".dot-3");
let dot4 = document.querySelector(".dot-4");

let crew1Click = (e) => {
  crewRole.innerHTML = "COMMANDER";
  crewH1.innerHTML = "DOUGLAS HURLEY";
  crewP.innerHTML =
    "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.";
  image.src = "../images/douglas.png";
  image.alt = "Douglas Hurley";
};

dot1.addEventListener("click", crew1Click);

let crew2Click = (e) => {
  crewRole.innerHTML = "MISSION SPECIALIST";
  crewH1.innerHTML = "MARK SHUTTLEWORTH";
  crewP.innerHTML =
    "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.";
  image.src = "../images/mark.png";
  image.alt = "Mark Shuttleworth";
};

dot2.addEventListener("click", crew2Click);

let crew3Click = (e) => {
  crewRole.innerHTML = "PILOT";
  crewH1.innerHTML = "VICTOR GLOVER";
  crewP.innerHTML =
    "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.";
  image.src = "../images/victor.png";
  image.alt = "Victor Glover";
};
dot3.addEventListener("click", crew3Click);

let crew4Click = (e) => {
  crewRole.innerHTML = "FLIGHT ENGINEER";
  crewH1.innerHTML = "ANOUSHEH ANSARI";
  crewP.innerHTML =
    "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. .";
  image.src = "../images/ansari.png";
  image.alt = "Anousheh Ansari";
};
dot4.addEventListener("click", crew4Click);
