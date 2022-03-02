"use strict";

const toggle = document.querySelector(".toggle");

const toggleClick = (e) => {
  document.querySelector(".nav").style.height = "100%";
};

toggle.addEventListener("click", toggleClick);

document.querySelector(".nav").addEventListener("click", function () {
  document.querySelector(".nav").style.height = "0";
});
