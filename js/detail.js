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
const banner = document.querySelector(".banner-top360");
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

// ----- COLOR SELECTOR -------------

const colorBtn = document.querySelectorAll(
  ".color-selector__warpper .color-tab"
);
const imgTab = document.querySelectorAll(".banner-top360__imgWarpper img");

colorBtn.forEach((Colorbtn) => {
  Colorbtn.addEventListener("click", () => {
    colorBtn.forEach((none) => {
      if (none !== Colorbtn) {
        none.classList.remove("selected");
      }
    });

    Colorbtn.classList.add("selected");

    imgTab.forEach((tab) => {
      if (
        Colorbtn.classList.contains("selected") &&
        tab.dataset.color === Colorbtn.dataset.color
      ) {
        imgTab.forEach((none) => {
          if (none !== tab) {
            none.classList.remove("active");
          }
        });

        tab.classList.add("active");
      }
    });
  });
});
