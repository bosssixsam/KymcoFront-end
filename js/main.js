//-- header mobile ---
const header = document.querySelector("header");
const burger = document.querySelector(".burger");
const navm = document.querySelector(".nav-mobile");
let state = false;
console.log(header.classList.contains("active"));

burger.addEventListener("click", () => {
  // console.log("click");
  header.classList.toggle("active");
  burger.classList.toggle("active");

  // if (header.style.backgroundColor === "transparent") {
  //   // console.log("hello");
  //   header.style.backgroundColor = "#f4352c";
  // } else {
  //   header.style.backgroundColor = "transparent";
  // }
  // navm.classList.toggle("active");
  window.document.body.classList.toggle("open_menu_mobile");
});

//-- scroll header ---
const topslider = document.querySelector(".slider");
const store_btn = document.querySelector(".customer-helper .store");
const regis_btn = document.querySelector(".customer-helper .regis");

// store_btn.addEventListener("click", () => {
//   console.log("hello");
// });

window.addEventListener("scroll", () => {
  let top = document.querySelector("html").scrollTop;
  if (top > topslider.offsetHeight - header.offsetHeight) {
    // state = true;
    header.style.backgroundColor = "#f4352c";
    store_btn.style.border = "1.5px solid #ffffff";
    regis_btn.style.border = "1.5px solid #ffffff";
  } else {
    header.style.backgroundColor = "transparent";
    store_btn.style.border = "none";
    regis_btn.style.border = "none";
    // state = false;
  }
});

//-- top slider ---
const slider = document.querySelector(".slider-container");
const num = document.querySelector(".paging__current");

const flkty = new Flickity(slider, {
  wrapAround: true,
  draggable: true,
  pageDots: false,
  prevNextButtons: false,
  autoPlay: 2000,
  on: {
    change: function (index) {
      // console.log(index);

      num.textContent = (index + 1).toString().padStart(2, "0");
    },
  },
});

//-- mission ---
const mission = document.querySelector(".mission__slider-container");
const pre = document.querySelector(".slide_btn.left");
const next = document.querySelector(".slide_btn.right");

const missionSlider = new Flickity(mission, {
  wrapAround: true,
  draggable: true,
  pageDots: false,
  prevNextButtons: false,
  autoPlay: 2000,
  on: {
    change: function (index) {
      // console.log(index);
      // num.textContent = (index + 1).toString().padStart(2, "0");
      $(".mission__content-item.active").removeClass("active");
      $(".mission__content-item").eq(index).addClass("active");
    },
  },
});

next.addEventListener("click", function () {
  missionSlider.next(true);
});
pre.addEventListener("click", function () {
  missionSlider.previous(true);
});

// $(".mission__content-item.active").removeClass("active");
// $(".mission__content-item").eq(index).addClass("active");

//-- Hot ---
// const hot = document.querySelector(".hot__slider-container");

// const hotSlider = new Flickity(hot, {
//   wrapAround: true,
//   freeScroll: true,
//   pageDots: false,
//   prevNextButtons: false,
// });
