const fifaMlsList = [
    "https://res.cloudinary.com/dmr2jbsva/image/upload/v1785333167/fifamls1_pknvgb.png",
    "https://res.cloudinary.com/dmr2jbsva/image/upload/v1785333171/fifamls2_zec0wq.png",
    "https://res.cloudinary.com/dmr2jbsva/image/upload/v1785333173/fifamls3_llgabc.png",
    "https://res.cloudinary.com/dmr2jbsva/image/upload/v1785333165/fifamls4_v2wen9.png",
    "https://res.cloudinary.com/dmr2jbsva/image/upload/v1785333178/fifamos5_gbq8m0.png",
    "https://res.cloudinary.com/dmr2jbsva/image/upload/v1785333164/fifamls6_ovliqq.png",
];

const europeList = [
    "https://res.cloudinary.com/dmr2jbsva/image/upload/v1785333172/europe1_g1dope.png",
    "https://res.cloudinary.com/dmr2jbsva/image/upload/v1785333170/europe2_x82ohe.png",
    "https://res.cloudinary.com/dmr2jbsva/image/upload/v1785333169/europe3_vem1zm.png",
    "https://res.cloudinary.com/dmr2jbsva/image/upload/v1785333163/europe4_v8ovks.png",
    "https://res.cloudinary.com/dmr2jbsva/image/upload/v1785333161/europe5_dvlptu.png",
    "https://res.cloudinary.com/dmr2jbsva/image/upload/v1785333166/europe6_vo7ppc.png",
];

const swedenList = [
    "https://res.cloudinary.com/dmr2jbsva/image/upload/v1785333184/sweden1_nscfwp.png",
    "https://res.cloudinary.com/dmr2jbsva/image/upload/v1785333180/sweden2_nguzpu.png",
    "https://res.cloudinary.com/dmr2jbsva/image/upload/v1785333181/sweden3_p1uoxx.png",
    "https://res.cloudinary.com/dmr2jbsva/image/upload/v1785333175/sweden4_qb1vlf.png",
];

const parentsList = [
    "https://res.cloudinary.com/dmr2jbsva/image/upload/v1785333159/parents1_vrsp4r.png",
    "https://res.cloudinary.com/dmr2jbsva/image/upload/v1785333156/parents2_ftvunl.png",
    "https://res.cloudinary.com/dmr2jbsva/image/upload/v1785333156/parents3_i4wxh0.png",
    "https://res.cloudinary.com/dmr2jbsva/image/upload/v1785333148/parents4_mfhjjf.png",
    "https://res.cloudinary.com/dmr2jbsva/image/upload/v1785333148/parents5_cjigvz.png",
    "https://res.cloudinary.com/dmr2jbsva/image/upload/v1785333151/parents6_mwlbfm.png",
];

const emailList = [
    "https://res.cloudinary.com/dmr2jbsva/image/upload/v1785333174/email1_ihxrzy.png",
    "https://res.cloudinary.com/dmr2jbsva/image/upload/v1785333176/email2_wpur8f.png",
    "https://res.cloudinary.com/dmr2jbsva/image/upload/v1785333178/email3_vyhpyd.png",
    "https://res.cloudinary.com/dmr2jbsva/image/upload/v1785333183/email4_ixpye7.png",
    "https://res.cloudinary.com/dmr2jbsva/image/upload/v1785333185/email5_jlf85v.png",
    "https://res.cloudinary.com/dmr2jbsva/image/upload/v1785333182/email6_xuf0et.png",
];

const harderList = [
    "https://res.cloudinary.com/dmr2jbsva/image/upload/v1785333154/harder1_uiugtn.png",
    "https://res.cloudinary.com/dmr2jbsva/image/upload/v1785333157/harder2_jffbjq.png",
    "https://res.cloudinary.com/dmr2jbsva/image/upload/v1785333160/harder3_n2rzt3.png",
    "https://res.cloudinary.com/dmr2jbsva/image/upload/v1785333150/harder4_ksi88t.png",
    "https://res.cloudinary.com/dmr2jbsva/image/upload/v1785333152/harder5_xwj3g1.png",
    "https://res.cloudinary.com/dmr2jbsva/image/upload/v1785333149/harder6_nfvw4x.png",
];


function createSlideshow(imgId, images) {
    let current = 0;
    const img = document.getElementById(imgId);

    img.src = images[current];

    return {
        next() {
            current = (current + 1) % images.length;
            img.src = images[current];
        },

        prev() {
            current = (current - 1 + images.length) % images.length;
            img.src = images[current];
        }
    };
}

const fifaMls = createSlideshow("fifamlsimg", fifaMlsList);
const europe = createSlideshow("europeimg", europeList);
const sweden = createSlideshow("swedenimg", swedenList);
const parents = createSlideshow("parentsimg", parentsList);
const email = createSlideshow("emailimg", emailList);
const harder = createSlideshow("harderimg", harderList);





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

