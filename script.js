// LOADER
document.addEventListener("DOMContentLoaded", function () {
  const loaderContainer = document.querySelector(".loader-container");

  // Aplica a classe 'loading' para exibir o loader
  document.body.classList.add("loading");

  window.addEventListener("load", function () {
    // Remove a classe 'loading' e adiciona 'loaded' após o carregamento completo
    document.body.classList.remove("loading");
    document.body.classList.add("loaded");

    // Espera o tempo da transição (0.5s) e então oculta o elemento
    setTimeout(function () {
      loaderContainer.style.display = "none";
    }, 500);
  });
});

// SLIDER
let screenWidth = window.innerWidth;
const splideOptions = {
  autoplay: true,
  arrows: false,
  drag: false,
  pauseOnHover: false,

  interval: 5000,
  speed: 1100,
  focus: "center",
  slideFocus: true,
  type: "loop",
  fixedWidth: "60vw",
  fixedHeight: "70vh",
  gap: "12px",

  breakpoints: {
    1300: {
      fixedWidth: "70vw",
      fixedHeight: "80vh",
    },
    768: {
      fixedWidth: screenWidth,
      fixedHeight: "70vh",
      drag: true,
      arrows: false,
      gap: "12px",
    },
    480: {
      fixedHeight: "50vh",
    },
  },
};

new Splide(".splide", splideOptions).mount();

// MENU MOBILE
function menuShow() {
  let menuMobile = document.querySelector(".mobile-menu");
  let header = document.querySelector("header");
  menuMobile.classList.toggle("none");
  header.classList.toggle("active");
}

document.querySelectorAll(".mobile-menu a").forEach((link) => {
  link.addEventListener("click", function () {
    menuShow();
  });
});
