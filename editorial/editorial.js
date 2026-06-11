const horseList = [
    "https://res.cloudinary.com/dmr2jbsva/image/upload/q_auto/f_auto/v1781025853/digitalhorses1_ojncle.jpg",
    "https://res.cloudinary.com/dmr2jbsva/image/upload/q_auto/f_auto/v1781025853/digitalhorses2_gkxzbo.jpg",
    "https://res.cloudinary.com/dmr2jbsva/image/upload/q_auto/f_auto/v1781025854/digitalhorses3_uv0gcz.jpg",
    "https://res.cloudinary.com/dmr2jbsva/image/upload/q_auto/f_auto/v1781025854/digitalhorses4_htxf5v.jpg",
    "https://res.cloudinary.com/dmr2jbsva/image/upload/q_auto/f_auto/v1781025856/digitalHorses5_nqgae5.jpg",
    "https://res.cloudinary.com/dmr2jbsva/image/upload/q_auto/f_auto/v1781025853/digitalhorses1_ojncle.jpg"
];
let i = 0;
const horseImg = document.getElementById("horseimg");
horseImg.src = "https://res.cloudinary.com/dmr2jbsva/image/upload/q_auto/f_auto/v1781025853/digitalhorses1_ojncle.jpg";
function horseNext() {
    if(i === 5 ) {
        i = 0;
    }
    i++;
    horseImg.src = horseList[i];
}

function horsePrev() {
    if(i === 0 ) {
        i = 5;
    }
    i--;
    horseImg.src = horseList[i];
}


const publiciList = [
    "https://res.cloudinary.com/dmr2jbsva/image/upload/q_auto/f_auto/v1781025867/publici1_ksjvkt.jpg",
    "https://res.cloudinary.com/dmr2jbsva/image/upload/q_auto/f_auto/v1781025869/publici2_bwttbh.jpg",
    "https://res.cloudinary.com/dmr2jbsva/image/upload/q_auto/f_auto/v1781025869/publici3_kjpx4h.jpg",
    "https://res.cloudinary.com/dmr2jbsva/image/upload/q_auto/f_auto/v1781025870/publici4_hwnozc.jpg",
    "https://res.cloudinary.com/dmr2jbsva/image/upload/q_auto/f_auto/v1781025870/publici5_gjfzkq.jpg",
    "https://res.cloudinary.com/dmr2jbsva/image/upload/q_auto/f_auto/v1781025870/publici6_pn8s0z.jpg",
    "https://res.cloudinary.com/dmr2jbsva/image/upload/q_auto/f_auto/v1781025867/publici1_ksjvkt.jpg",
];
let a = 0;
const publiciImg = document.getElementById("publicimg");
publiciImg.src ="https://res.cloudinary.com/dmr2jbsva/image/upload/q_auto/f_auto/v1781025867/publici1_ksjvkt.jpg";
function publiciNext() {
    if(a === 6) {
        a = 0;
    }
    a++;
    publiciImg.src = publiciList[a];
}
function publiciPrev() {
    if(a === 0 ) {
        a = 6;
    }
    a--;
    publiciImg.src = publiciList[a];
}


const ripenedList = [
    "https://res.cloudinary.com/dmr2jbsva/image/upload/q_auto/f_auto/v1781025883/ripened1_zic4ff.png",
    "https://res.cloudinary.com/dmr2jbsva/image/upload/q_auto/f_auto/v1781025876/ripened2_q4tvki.png",
    "https://res.cloudinary.com/dmr2jbsva/image/upload/q_auto/f_auto/v1781025879/ripened3_kgvfsf.png",
    "https://res.cloudinary.com/dmr2jbsva/image/upload/q_auto/f_auto/v1781025882/ripened4_khx7uj.png",
    "https://res.cloudinary.com/dmr2jbsva/image/upload/q_auto/f_auto/v1781025882/ripened5_ikxfn8.png",
    "https://res.cloudinary.com/dmr2jbsva/image/upload/q_auto/f_auto/v1781025883/ripened1_zic4ff.png"
];
let v = 0;
const ripenedImg = document.getElementById("ripenedimg");
ripenedImg.src = "https://res.cloudinary.com/dmr2jbsva/image/upload/q_auto/f_auto/v1781025883/ripened1_zic4ff.png";
function ripenedNext() {
    if(v === 5 ) {
        v = 0;
    }
    v++;
    ripenedImg.src = ripenedList[v];
}
function ripenedPrev() {
    if(v === 0 ) {
        v = 5;
    }
    v--;
    ripenedImg.src = ripenedList[v];
}



const hiddenList = [
    "https://res.cloudinary.com/dmr2jbsva/image/upload/q_auto/f_auto/v1781025866/hidden1_lqeb1o.jpg",
    "https://res.cloudinary.com/dmr2jbsva/image/upload/q_auto/f_auto/v1781025865/hidden2_tcj55i.jpg",
    "https://res.cloudinary.com/dmr2jbsva/image/upload/q_auto/f_auto/v1781025868/hidden3_oqyxtv.jpg",
    "https://res.cloudinary.com/dmr2jbsva/image/upload/q_auto/f_auto/v1781025869/hidden4_afclvo.jpg",
    "https://res.cloudinary.com/dmr2jbsva/image/upload/q_auto/f_auto/v1781025866/hidden1_lqeb1o.jpg"
];
let h = 0;
const hiddenImg = document.getElementById("hiddenimg");
hiddenImg.src = "https://res.cloudinary.com/dmr2jbsva/image/upload/q_auto/f_auto/v1781025866/hidden1_lqeb1o.jpg";
function hiddenNext() {
    if(h === 4 ) {
        h = 0;
    }
    h++;
    hiddenImg.src = hiddenList[h];
}
function hiddenPrev() {
    if(h === 0 ) {
        h = 4;
    }
    h--;
    hiddenImg.src = hiddenList[h];
}


const reitList = [
    "https://res.cloudinary.com/dmr2jbsva/image/upload/q_auto/f_auto/v1781025881/reiteration2_bpsfxi.png",
    "https://res.cloudinary.com/dmr2jbsva/image/upload/q_auto/f_auto/v1781025882/reiteration4_zdet23.png",
    "https://res.cloudinary.com/dmr2jbsva/image/upload/q_auto/f_auto/v1781025882/reiteration3_ibjaln.png",
    "https://res.cloudinary.com/dmr2jbsva/image/upload/q_auto/f_auto/v1781026285/reiteration1_rrqgdn.png",
    "https://res.cloudinary.com/dmr2jbsva/image/upload/q_auto/f_auto/v1781025881/reiteration2_bpsfxi.png"
];
let j = 0;
const reitImg = document.getElementById("reitimg");
reitImg.src = "https://res.cloudinary.com/dmr2jbsva/image/upload/q_auto/f_auto/v1781025881/reiteration2_bpsfxi.png";
function reitNext() {
    if(j === 4 ) {
        j = 0;
    }
    j++;
    reitImg.src = reitList[j];
}
function reitPrev() {
    if(j === 0 ) {
        j = 4;
    }
    j--;
    reitImg.src = reitList[j];
}


const glowList = [
    "https://res.cloudinary.com/dmr2jbsva/image/upload/q_auto/f_auto/v1781026281/glow1_gqyiu3.png",
    "https://res.cloudinary.com/dmr2jbsva/image/upload/q_auto/f_auto/v1781025858/glow2_zxsewk.png",
    "https://res.cloudinary.com/dmr2jbsva/image/upload/q_auto/f_auto/v1781026282/glow3_nmrf8a.png",
    "https://res.cloudinary.com/dmr2jbsva/image/upload/q_auto/f_auto/v1781025870/glow4_frfnlm.png",
    "https://res.cloudinary.com/dmr2jbsva/image/upload/q_auto/f_auto/v1781026281/glow1_gqyiu3.png"
];
let g = 0;
const glowImg = document.getElementById("glowimg");
glowImg.src = "https://res.cloudinary.com/dmr2jbsva/image/upload/q_auto/f_auto/v1781026281/glow1_gqyiu3.png";
function glowNext() {
    if(g === 4 ) {
        g = 0;
    }
    g++;
    glowImg.src = glowList[g];
}
function glowPrev() {
    if(g === 0 ) {
        g = 4;
    }
    g--;
    glowImg.src = glowList[g];
}

const heartlandList = [
    "https://res.cloudinary.com/dmr2jbsva/image/upload/q_auto/f_auto/v1781025871/heartland1_y6akrm.png",
    "https://res.cloudinary.com/dmr2jbsva/image/upload/q_auto/f_auto/v1781025861/heartland2_ebiguc.png",
    "https://res.cloudinary.com/dmr2jbsva/image/upload/q_auto/f_auto/v1781025869/heartland3_g049z2.png",
    "https://res.cloudinary.com/dmr2jbsva/image/upload/q_auto/f_auto/v1781025860/heartland4_mpwscf.png",
    "https://res.cloudinary.com/dmr2jbsva/image/upload/q_auto/f_auto/v1781025871/heartland1_y6akrm.png"
];
let o = 0;
const heartlandImg = document.getElementById("heartlandimg");
heartlandImg.src = "https://res.cloudinary.com/dmr2jbsva/image/upload/q_auto/f_auto/v1781025871/heartland1_y6akrm.png";
function heartlandNext() {
    if(o === 4 ) {
        o = 0;
    }
    o++;
    heartlandImg.src = heartlandList[o];
}
function heartlandPrev() {
    if(o === 0 ) {
        o = 4;
    }
    o--;
    heartlandImg.src = heartlandList[o];
}

const whatIsList = [
    "https://res.cloudinary.com/dmr2jbsva/image/upload/q_auto/f_auto/v1781026292/whatiscover_xi1jer.png",
    "https://res.cloudinary.com/dmr2jbsva/image/upload/q_auto/f_auto/v1781026286/whatis1_uql3l7.png",
    "https://res.cloudinary.com/dmr2jbsva/image/upload/q_auto/f_auto/v1781026288/whatis2_anl9nl.png",
    "https://res.cloudinary.com/dmr2jbsva/image/upload/q_auto/f_auto/v1781026288/whatis3_jgyhxd.png",
    "https://res.cloudinary.com/dmr2jbsva/image/upload/q_auto/f_auto/v1781026288/whatis4_ruivhw.png",
    "https://res.cloudinary.com/dmr2jbsva/image/upload/q_auto/f_auto/v1781026289/whatis5_tgeqqf.png",
    "https://res.cloudinary.com/dmr2jbsva/image/upload/q_auto/f_auto/v1781026290/whatis6_ugxuei.png",
    "https://res.cloudinary.com/dmr2jbsva/image/upload/q_auto/f_auto/v1781026291/whatis7_jclxtm.png",
    "https://res.cloudinary.com/dmr2jbsva/image/upload/q_auto/f_auto/v1781026292/whatiscover_xi1jer.png"

];
let w = 0;
const whatIsImg = document.getElementById("whatisimg");
whatIsImg.src = "https://res.cloudinary.com/dmr2jbsva/image/upload/q_auto/f_auto/v1781026292/whatiscover_xi1jer.png";
function whatIsNext() {
    if(w === 8 ) {
        w = 0;
    }
    w++;
    whatIsImg.src = whatIsList[w];
}
function whatIsPrev() {
    if(w === 0 ) {
        w = 8;
    }
    w--;
    whatIsImg.src = whatIsList[w];
}









const heartlandP = document.getElementById("heartlandp");
const ripenedP = document.getElementById("ripenedp");
const horsesP = document.getElementById("horsesp");
const reiterationP = document.getElementById("reiterationp");
const whatIsP = document.getElementById("whatisp");
const hiddenP = document.getElementById("hiddenp");
const publiciP = document.getElementById("publicip");
const glowP = document.getElementById("glowp");


const sections = document.querySelectorAll("#heartland, #ripened, #horses, #reiteration, #whatis, #hidden, #publici, #glow");

function hideAll() {
    heartlandP.classList.remove("active");
    ripenedP.classList.remove("active");
    horsesP.classList.remove("active");
    reiterationP.classList.remove("active");
    whatIsP.classList.remove("active");
    hiddenP.classList.remove("active");
    publiciP.classList.remove("active");
    glowP.classList.remove("active");
}

hideAll();

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        hideAll();
        if(entry.target.id ==="heartland") {
            heartlandP.classList.add("active");
        }
        if(entry.target.id ==="ripened") {
            ripenedP.classList.add("active");
        }
        if(entry.target.id ==="horses") {
            horsesP.classList.add("active");
        }
        if(entry.target.id ==="reiteration") {
            reiterationP.classList.add("active");
        }
        if(entry.target.id ==="whatis") {
            whatIsP.classList.add("active");
        }
        if(entry.target.id ==="hidden") {
            hiddenP.classList.add("active");
        }
        if(entry.target.id ==="publici") {
            publiciP.classList.add("active");
        }
        if(entry.target.id ==="glow") {
            glowP.classList.add("active");
        }

    });
}, {
    threshold: 0,
    rootMargin: "-35% 0px -65% 0px"
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
