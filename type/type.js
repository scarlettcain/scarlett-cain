const zodiacP = document.getElementById("zodiacp");
const carsP = document.getElementById("carsp");
const wormsP = document.getElementById("wormsp");
const menuP = document.getElementById("menup");




const sections = document.querySelectorAll("#zodiac, #cars, #worms, #menu");

function hideAll() {
    zodiacP.classList.remove("active");
    carsP.classList.remove("active");
    wormsP.classList.remove("active");
    menuP.classList.remove("active");
}

hideAll();

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        hideAll();
        if(entry.target.id ==="zodiac") {
            zodiacP.classList.add("active");
        }
        if(entry.target.id ==="cars") {
            carsP.classList.add("active");
        }
        if(entry.target.id ==="worms") {
            wormsP.classList.add("active");
        }
        if(entry.target.id ==="menu") {
            menuP.classList.add("active");
        }

    });
}, {
    threshold: 0,
    rootMargin: "-12.5% 0px -87.5% 0px"
});

sections.forEach(section => observer.observe(section));



/* ====================================================================================================
              HAMBURGER MENU
=======================================================================================================
 */

const menuToggle = document.getElementById('hamburger');
const navLinks = document.querySelector('.topnav');

menuToggle.addEventListener('click', () => {
    console.log("clicked");
    navLinks.classList.toggle('active');
})

