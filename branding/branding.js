const cookoutP = document.getElementById("cookoutp");
const poxxyP = document.getElementById("poxxyp");
const patternP = document.getElementById("patternp");





const sections = document.querySelectorAll("#cookout-wrapper, #poxxy-wrapper, #pattern-wrapper");

function hideAll() {
    cookoutP.classList.remove("active");
    poxxyP.classList.remove("active");
    patternP.classList.remove("active");

}

hideAll();

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        hideAll();
        if(entry.target.id ==="cookout-wrapper") {
            cookoutP.classList.add("active");
        }
        if(entry.target.id ==="poxxy-wrapper") {
            poxxyP.classList.add("active");
        }
        if(entry.target.id ==="pattern-wrapper") {
            patternP.classList.add("active");
        }

    });
}, {
    threshold: 0,
    rootMargin: "-12.5% 0px -87.5% 0px"
});

sections.forEach(section => observer.observe(section));


/* ==========================================
              HAMBURGER MENU
================================================
 */

const menuToggle = document.getElementById('hamburger');
const navLinks = document.querySelector('.topnav');

menuToggle.addEventListener('click', () => {
    console.log("clicked");
    navLinks.classList.toggle('active');
})

