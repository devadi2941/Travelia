const preloader = document.querySelector("[data-preloader]");
window.addEventListener('load',()=>{
    preloader.classList.add("remove");
});


//adding event listeners on multiple events

const addEventOnElements = function(elements,eventType,callback){
    for(let i = 0;i<elements.length;i++){

        elements[i].addEventListener(eventType,callback);
    }
}

//navbar toggler for mobile

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");


const toggleNav = function(){

    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
    document.body.classList.toggle("nav-active")
}

//using the eventlistner

addEventOnElements(navTogglers,"click",toggleNav);

//Header

const header = document.querySelector("[data-header]");

window.addEventListener("scroll",()=>{
    header.classList[window.scrollY>100 ? "add": "remove"]("active");

})