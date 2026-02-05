const horseList = [
    "editorial-src/digitalhorses1.jpg",
    "editorial-src/digitalhorses2.jpg",
    "editorial-src/digitalhorses3.jpg",
    "editorial-src/digitalhorses4.jpg",
    "editorial-src/digitalhorses5.jpg",
    "editorial-src/digitalhorses1.jpg"
];
let i = 0;
const horseImg = document.getElementById("horseimg");
horseImg.src = "editorial-src/digitalhorses1.jpg";
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
    "editorial-src/publici1.jpg",
    "editorial-src/publici2.jpg",
    "editorial-src/publici3.jpg",
    "editorial-src/publici4.jpg",
    "editorial-src/publici5.jpg",
    "editorial-src/publici6.jpg",
    "editorial-src/publici1.jpg",
];
let a = 0;
const publiciImg = document.getElementById("publicimg");
publiciImg.src ="editorial-src/publici1.jpg";
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
    "editorial-src/ripened1.png",
    "editorial-src/ripened2.png",
    "editorial-src/ripened3.png",
    "editorial-src/ripened4.png",
    "editorial-src/ripened5.png",
    "editorial-src/ripened1.png"
];
let v = 0;
const ripenedImg = document.getElementById("ripenedimg");
ripenedImg.src = "editorial-src/ripened1.png";
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
    "editorial-src/hidden1.jpg",
    "editorial-src/hidden2.jpg",
    "editorial-src/hidden3.jpg",
    "editorial-src/hidden4.jpg",
    "editorial-src/hidden1.jpg"
];
let h = 0;
const hiddenImg = document.getElementById("hiddenimg");
hiddenImg.src = "editorial-src/hidden1.jpg";
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