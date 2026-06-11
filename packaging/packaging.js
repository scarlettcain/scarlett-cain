/* const boldP = document.getElementById("boldP");


const sections = document.querySelectorAll("#bold-wrapper");

function hideAll() {
    boldP.classList.remove("active");
}

hideAll();

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        hideAll();
        if (entry.target.id === "bold-wrapper") {
            boldP.classList.add("active");
        }

    });
}, {
    threshold: 0,
    rootMargin: "-12.5% 0px -87.5% 0px"
});

sections.forEach(section => observer.observe(section));

*/

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

console.log("js loaded");
