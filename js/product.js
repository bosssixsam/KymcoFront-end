//-- header mobile ---
const header = document.querySelector("header");
const burger = document.querySelector(".burger");
const navm = document.querySelector(".nav-mobile");
let state = false;

burger.addEventListener("click", () => {
  let top = document.querySelector("html").scrollTop;
  header.classList.toggle("active");
  burger.classList.toggle("active");
  navm.classList.toggle("active");

  if (header.classList.contains("active")) {
    header.style.backgroundColor = "#f4352c";
  } else if (top <= banner.offsetHeight - header.offsetHeight) {
    header.style.backgroundColor = "transparent";
  }

  window.document.body.classList.toggle("open_menu_mobile");
});

//-- scroll header ---
const banner = document.querySelector(".banner");
const store_btn = document.querySelector(".customer-helper .store");
const regis_btn = document.querySelector(".customer-helper .regis");

// store_btn.addEventListener("click", () => {
//   console.log("hello");
// });

window.addEventListener("scroll", () => {
  let top = document.querySelector("html").scrollTop;
  if (top > banner.offsetHeight - header.offsetHeight) {
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

// -------- product navigation --------------

// ---- Tab Slider -------------

const tabContainer = document.querySelector(".products-content__items.slider");

// console.log(tabContainer.childElementCount);

if (tabContainer.childElementCount > 3) {
  console.log("hello");

  const flkty = new Flickity(tabContainer, {
    wrapAround: true,
    draggable: true,
    pageDots: false,
    prevNextButtons: false,
    // imagesLoaded: true,
    // on: {
    //   change: function (index) {
    //     // console.log(index);

    //     num.textContent = (index + 1).toString().padStart(2, "0");
    //   },
    // },
  });
}

// --- Range Slider Price --------

$(".range-slider").jRange({
  from: 13500000,
  to: 117000000,
  step: 1,
  scale: [13500000, 117000000],
  format: "%s",
  width: "100%",
  showLabels: false,
  isRange: true,
});

$(".range-slider").change(() => {
  let min = parseInt($(".range-price .pointer-label.low").text());
  let max = parseInt($(".range-price .pointer-label.high").text());

  $(".price__content .text-left h3").html(min.toLocaleString() + " VND");
  $(".price__content .text-right h3").html(max.toLocaleString() + " VND");
});
