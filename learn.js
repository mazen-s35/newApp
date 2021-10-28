// Mack A Drack Mode
let themeToggole = document.querySelector(".theme-toggole");

if (window.localStorage.getItem("toggole")) {
    document.body.classList.add("active") ? document.body.classList.add(window.localStorage.getItem("toggole")) :
        document.body.classList.remove(window.localStorage.removeItem("toggole"));
}

themeToggole.onclick = () => {
        themeToggole.classList.toggle("active");
        //In the case of an active class, make a dark mode
        if (themeToggole.classList.contains("active")) {
            document.body.classList.add("active");
        } else {
            document.body.classList.remove("active");
        }
        window.localStorage.setItem("toggole", themeToggole.classList.contains("active"));
    }
    // color change button 
let themeColors = document.querySelectorAll(".theme-colors .color");

if (window.localStorage.getItem("color")) {
    document.querySelector(":root").style.setProperty('--main-color', window.localStorage.getItem("color"));
}

themeColors.forEach(color => {
    color.onclick = () => {
        let background = color.style.background;
        document.querySelector(":root").style.setProperty('--main-color', background);
        // Add Color To Local Storage
        window.localStorage.setItem("color", color.style.background);
    };
});

// Open And Close themeCounteaner
let themeCounteaner = document.querySelector(".theme-counteaner");
let themOpen = document.querySelector("#theme-open");

themOpen.onclick = function() {
    themeCounteaner.classList.add("active");
    document.body.style.paddingRight = '350px';
};

document.querySelector("#icone").onclick = function() {
    themeCounteaner.classList.remove("active");
    document.body.style.paddingRight = '0px';
};