window.addEventListener("load", () => {
  const preloader = document.querySelector(".js-preloander");
  preloader.classList.add("fade-out");

  setTimeout(() => {
    preloader.style.display = "none";
    /*Animacion y scroll */
    AOS.init();
  }, 600);
});

//  header bg revels
const headerBg = () => {
  const header = document.querySelector(".js-header");

  window.addEventListener("scroll", function () {
    if (this.scrollY > 0) {
      header.classList.add("bg-reveal");
    } else {
      header.classList.remove("bg-reveal");
    }
  });
};

headerBg();

/*Nav */
const navigation = () => {
  const navToggler = document.querySelector(".js-nav-toggler");
  const nav = document.querySelector(".js-nav");
  const navItems = nav.querySelectorAll("li");

  const navToggle = () => {
    nav.classList.toggle("open");
    navToggler.classList.toggle("active");
  };

  navToggler.addEventListener("click", navToggle);

  navItems.forEach((li) => {
    li.querySelector("a").addEventListener("click", () => {
      if (window.innerWidth <= 767) {
        navToggle();
      }
    });
  });
};

navigation();
