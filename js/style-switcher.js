/* style Switcher */
const styleSwitcherToggle = () => {
  const styleSwitcher = document.querySelector(".js-style-switcher");
  const styleSwitcherToggle = document.querySelector(".js-style-switcher-toggler");

  styleSwitcherToggle.addEventListener("click",function(){
    styleSwitcher.classList.toggle("open");
    this.querySelector("i").classList.toggle("fa-times");
    this.querySelector("i").classList.toggle("fa-cog");
  });
}

styleSwitcherToggle();

// Theme color
const themeColor = () => {
  const hueSlider = document.querySelector(".js-hue-slider");
  const html = document.querySelector("html");

  const setHue = (value) => {
    html.style.setProperty("--hue", value);
    document.querySelector(".js-hue").innerHTML = value;
  };

  hueSlider.addEventListener("input", function () {
    setHue(this.value);
    /* Establece las prefenecias del usuario en local storage */
    localStorage.setItem("--hue", this.value);
    // console.log(this.value);
  });

  const slider = (value) => {
    hueSlider.value = value;
  };
  /*Verifique las preferencias de usuario guardadas, si las hay al cargar el sitio web*/
  if (localStorage.getItem("--hue") !== null) {
    setHue(localStorage.getItem("--hue"));
    slider(localStorage.getItem("--hue"));
  } else {
    //Color predeterminado
    const hue = getComputedStyle(html).getPropertyValue("--hue");
    setHue(hue);
    slider(hue.split(" ").join(""));
  }
};

themeColor();

/*Light & dark mod */

const themeLightDark = () => {
    const darkModeCheckbox = document.querySelector(".js-dark-mode");

    const themeMode = () => {
        if(localStorage.getItem("theme-dark") === "false") {
            document.body.classList.remove("t-dark");
        } else {
            document.body.classList.add("t-dark");
        }
    }

    darkModeCheckbox.addEventListener("click", function() {

        /*Verifique las preferencias de usuario guardadas, si las hay al cargar el sitio web*/
        localStorage.setItem("theme-dark", this.checked);
        themeMode();
        console.log(this.checked);
    })

    /*Verifique las preferencias de usuario guardadas, si las hay al cargar el sitio web*/
    if(localStorage.getItem("theme-dark") !== null){
        themeMode();
    }

    if(document.body.classList.contains("t-dark")){
        darkModeCheckbox.checked = true;
    }
}

themeLightDark();