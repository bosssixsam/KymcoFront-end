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

const proNavTab = document.querySelectorAll(".products__navigation span");

const productItem = document.querySelector(".products__items");
const productChoose = document.querySelector(".products__choose");

proNavTab.forEach((proBtn) => {
  proBtn.addEventListener("click", () => {
    proNavTab.forEach((none) => {
      if (none !== proBtn) {
        none.classList.remove("selected");
      }
    });

    proBtn.classList.add("selected");

    if (
      proBtn.classList.contains("selected") &&
      proBtn.dataset.id === "productsItem"
    ) {
      // console.log("check");

      if (!productItem.classList.contains("active")) {
        productItem.classList.add("active");
      }
      productChoose.classList.remove("active");
    }

    if (
      proBtn.classList.contains("selected") &&
      proBtn.dataset.id === "productsChoose"
    ) {
      if (!productChoose.classList.contains("active")) {
        productChoose.classList.add("active");

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

          $(".price__content .text-left h3").html(
            min.toLocaleString() + " VND"
          );
          $(".price__content .text-right h3").html(
            max.toLocaleString() + " VND"
          );
        });
      }
      productItem.classList.remove("active");
    }
  });
});

// ---- Tab Slider -------------

const tabContainer = document.querySelector(".products-content__items.slider");

const nextBtn = document.querySelector(".slider-warpper .next");
const preBtn = document.querySelector(".slider-warpper .pre");

// console.log(tabContainer.childElementCount);

if (tabContainer.childElementCount > 3) {
  const flkty = new Flickity(tabContainer, {
    wrapAround: false,
    draggable: true,
    pageDots: false,
    prevNextButtons: false,
    lazyLoad: true,
    cellAlign: "left",
    // imagesLoaded: true,
    on: {
      ready: function () {
        preBtn.disabled = true;
        preBtn.style.opacity = "0";
      },

      change: function (index) {
        if (index > 0) {
          preBtn.disabled = false;
          preBtn.style.opacity = "1";
        } else {
          preBtn.disabled = true;
          preBtn.style.opacity = "0";
        }

        const target = flkty.selectedCell.target;

        if (target === flkty.getLastCell().target) {
          nextBtn.disabled = true;
          nextBtn.style.opacity = "0";
        } else {
          nextBtn.disabled = false;
          nextBtn.style.opacity = "1";
        }
      },
    },
  });

  nextBtn.addEventListener("click", () => {
    flkty.next();
  });
  preBtn.addEventListener("click", () => {
    flkty.previous();
  });
}

// ------------ CHOOSE TAB ------------------

const list1Btn = document.querySelectorAll(
  ".list1 .tab-container .type__item-tab"
);
const list2Btn = document.querySelectorAll(
  ".list2 .tab-container .type__item-tab"
);

const shapeBtn = document.querySelectorAll(
  ".shape .shape__item .shape__item-tab"
);

list1Btn.forEach((btn1) => {
  btn1.addEventListener("click", () => {
    list1Btn.forEach((none1) => {
      if (none1 !== btn1) {
        none1.classList.remove("selected");
      }
    });

    btn1.classList.add("selected");
  });
});

list2Btn.forEach((btn2) => {
  btn2.addEventListener("click", () => {
    list2Btn.forEach((none2) => {
      if (none2 !== btn2) {
        none2.classList.remove("selected");
      }
    });

    btn2.classList.add("selected");
  });
});

shapeBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    shapeBtn.forEach((noneShape) => {
      if (noneShape !== btn) {
        noneShape.classList.remove("selected");
      }
    });

    btn.classList.add("selected");
  });
});

// ---------- Product POPUP ---------------------
const popup = document.querySelector(".Productpopup");
const itemBtn = document.querySelectorAll(".products-content__items .compare");
const popupCloseBtn = document.querySelector(
  ".Productpopup .popuplog .Productpopup__tab .close"
);

itemBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    popup.classList.add("active");
  });
});

popup.addEventListener("click", () => {
  console.log("hello");
  popup.classList.remove("active");
});

popupCloseBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  popup.classList.remove("active");
});
