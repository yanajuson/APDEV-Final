let navbar = document.querySelector(".navbar");
let searchBox = document.querySelector(".search-box .bx-search");
  
searchBox.addEventListener("click", ()=> {
    navbar.classList.toggle("showInput");

    if(navbar.classList.contains("showInput")) {
        searchBox.classList.replace("bx-search" ,"bx-x");
    }
    
    else {
    searchBox.classList.replace("bx-x" ,"bx-search");
    }
});


let navLinks = document.querySelector(".nav-links");
let menuOpenBtn = document.querySelector(".navbar .bx-menu");
let menuCloseBtn = document.querySelector(".nav-links .bx-x");

menuOpenBtn.onclick = function() {
    navLinks.style.left = "0";
}

menuCloseBtn.onclick = function() {
    navLinks.style.left = "-100%";
}


let browseArrow = document.querySelector(".browse-arrow");
browseArrow.onclick = function() {
    navLinks.classList.toggle("show1");
}