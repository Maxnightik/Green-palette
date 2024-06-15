const swiper = new Swiper(".rewiews__slider", {
  breakpoints: {
    320: {
      slidesPerView: 1,
      grid: {
        rows: 2,
        fill: "row",
      },
      navigation: {
        prevEl: ".rewiews__item-prev",
        nextEl: ".rewiews__item-next",
      },
      spaceBetween: 22,
      loop: true,
    },

    640: {
      slidesPerView: 2,
    },
  },
});

const swiperTeam = new Swiper(".team__inner", {
  breakpoints: {
    0: {
      slidesPerView: 2,
      navigation: {
        prevEl: ".rewiews__item-prev",
        nextEl: ".rewiews__item-next",
      },
      spaceBetween: 40,
      loop: true,
    },

    361: {
      slidesPerView: 0,
    },
  },
});

const menuBtn = document.querySelector(".menu__btn");
const menuList = document.querySelector(".menu__list");

menuBtn.addEventListener("click", () => {
  menuList.classList.toggle("menu__open");
});

let accordeonTitle = document.querySelectorAll(".accordeon__title");

accordeonTitle.forEach((item) => {
  item.addEventListener("click", () => {
    const parent = item.parentNode;

    if (parent.classList.contains("accordeon__item--active")) {
      parent.classList.remove("accordeon__item--active");
    } else {
      accordeonTitle.forEach((element) => {
        element.parentNode.classList.remove("accordeon__item--active");
      });
      parent.classList.add("accordeon__item--active");
    }
  });
});
