"use strict";

//Add active class
let destLists = document.getElementById("dest-lists");
let destLink = destLists.getElementsByClassName("dest-link");

for (let i = 0; i < destLink.length; i++) {
  destLink[i].addEventListener("click", function () {
    var activeLink = document.getElementsByClassName("highlight");
    activeLink[0].className = activeLink[0].className.replace(" highlight", "");
    this.className += " highlight";
  });
}

//Display different pages
let moonClick = (e) => {
  document.querySelector("#my-image").src = "../images/moon.png";
  document.querySelector("#my-image").alt = "Moon";
  document.querySelector(".main-span").innerHTML = "MOON";
  document.querySelector(".info-p").innerHTML =
    "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.";
  document.querySelector(".distance-p-one").innerHTML = "384,400 km";
  document.querySelector(".distance-p-two").innerHTML = "3 DAYS";
};

document.querySelector(".moon").addEventListener("click", moonClick);

let marsClick = (e) => {
  document.querySelector("#my-image").src = "../images/mars.png";
  document.querySelector("#my-image").alt = "Mars";
  document.querySelector(".main-span").innerHTML = "MARS";
  document.querySelector(".info-p").innerHTML =
    "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!";
  document.querySelector(".distance-p-one").innerHTML = "225 MIL. KM";
  document.querySelector(".distance-p-two").innerHTML = "9 MONTHS";
};

document.querySelector(".mars").addEventListener("click", marsClick);

let europaClick = (e) => {
  document.querySelector("#my-image").src = "../images/europa.png";
  document.querySelector("#my-image").alt = "Europa";
  document.querySelector(".main-span").innerHTML = "EUROPA";
  document.querySelector(".info-p").innerHTML =
    "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.";
  document.querySelector(".distance-p-one").innerHTML = "628 MIL. KM";
  document.querySelector(".distance-p-two").innerHTML = "3 YEARS";
};

document.querySelector(".europa").addEventListener("click", europaClick);

let titanClick = (e) => {
  document.querySelector("#my-image").src = "../images/titan.png";
  document.querySelector("#my-image").alt = "Titan";
  document.querySelector(".main-span").innerHTML = "TITAN";
  document.querySelector(".info-p").innerHTML =
    "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.";
  document.querySelector(".distance-p-one").innerHTML = "1.6 BIL. KM";
  document.querySelector(".distance-p-two").innerHTML = "7 YEARS";
};

document.querySelector(".titan").addEventListener("click", titanClick);

