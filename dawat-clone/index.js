let slides = document.querySelectorAll(".Slides");
let dots = document.querySelectorAll(".dot");
let slideinterval = 5000;
let slideIndex = 0;
let slidetime;
const sections = document.querySelectorAll("body > section");
const navLi = document.querySelectorAll(".navbarlink");
let mybutton = document.getElementById("scrollToTop");
console.log(slides, dots);
slides[0].style.display = "block";
dots[0].className += " active";
imgSlide(slideIndex);
function imgSlide(n) {
  clearTimeout(slidetime);
  if (n > slides.length - 1) {
    slideIndex = 0;
    n = 0;
  }
  if (n < 0) {
    slideIndex = slides.length;
    n = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    dots[i].className = dots[i].className.replace(" active", "");
  }
  console.log("n and slideIndex", n);
  slides[n].style.display = "block";
  dots[n].className += " active";
  slideIndex++;
  slidetime = setTimeout(() => {
    imgSlide(slideIndex);
    console.log("SLIDEINDEX", slideIndex);
  }, slideinterval);
}
function plusSlides(n) {
  clearTimeout(slidetime);
  imgSlide((slideIndex = slideIndex + n));
}
function currentSlide(n) {
  clearTimeout(slidetime);
  imgSlide((slideIndex = n));
}
window.onscroll = function () {
  myFunction();
  scrollFunction();
};

const navbar = document.getElementById("navbar");
const navbarlinks = document.querySelector("#navbarQuickLinks a");

let sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
    document.querySelector("#navbarLogo").src = "main_logo_black.png";
    navbar.style.background = "white";
  } else {
    navbar.classList.remove("sticky");
    document.querySelector("#navbarLogo").src = "main_logo.png";
    navbar.style.background = "rgba(255, 255, 255, 0)";
  }
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (pageYOffset >= sectionTop - 60) {
      current = section.getAttribute("id");
    }
  });

  navLi.forEach((li) => {
    li.classList.remove("activelink");
    if (li.classList.contains(current)) {
      li.classList.add("activelink");
    }
  });
}
function buttonRight(scroll_element) {
  document.querySelector(`${scroll_element}`).scrollLeft += 250;
}
function buttonLeft(scroll_element) {
  document.querySelector(`${scroll_element}`).scrollLeft -= 250;
}

filterSelection("ALL");
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filterDiv");
  if (c == "ALL") c = "";
  for (i = 0; i < x.length; i++) {
    RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) AddClass(x[i], "show");
  }
}

function AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

function RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("menuBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("menuActive");
    current[0].className = current[0].className.replace(" menuActive", "");
    this.className += " menuActive";
  });
}
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
