//Ed's Programming Portfolio - JavaScript File

const redButton = document.getElementById("redButton");
const greenButton = document.getElementById("greenButton");
const blackButton = document.getElementById("blackButton");
const randomButton = document.getElementById("randomButton");

function randomColor() {
    let r = Math.floor(Math.random()*255);
    let g = Math.floor(Math.random()*255);
    let b = Math.floor(Math.random()*255);
    return `RGB(${r}, ${g}, ${b})`;
};

function redButtonPress() {
    document.body.style.backgroundColor = "#700D00";
    document.body.style.color = "black";
    document.getElementsByTagName("header")[0].style.backgroundColor = "#700D00";
    document.getElementsByClassName("header")[0].style.backgroundColor = "#4A0B02";
    document.getElementsByClassName("header")[0].style.border = "#FFD8A6 solid 2px";
    document.getElementsByTagName("footer")[0].style.backgroundColor = "#4A0B02";
    document.getElementsByTagName("footer")[0].style.borderTop = "#FFD8A6 solid 1px";
    document.getElementsByClassName("projectSidebar")[0].style.backgroundColor = "#FFD8A6";
    document.getElementsByClassName("mainPage")[0].style.backgroundColor = "#FFEED9";
    let h2 = document.getElementsByTagName("h2");
    let i = 0;
    while(i < h2.length) {
        h2[i].style.color = "#4A0B02";
        h2[i].style.textShadow = "0.06rem 0.06rem #700D00";
        i++;
    };
    let h3 = document.getElementsByTagName("h3");
    i = 0;
    while(i < h3.length) {
        h3[i].style.color = "#4A0B02";
        i++;
    };
    let button = document.getElementsByTagName("button");
    i = 0;
    while(i < button.length) {
        button[i].style.backgroundColor = "#700D00";
        i++;
    };
    let img = document.getElementsByTagName("img");
    i = 0;
    while(i < img.length) {
        img[i].style.border = "#FFD8A6 solid 1px";
        i++;
    };
};
function greenButtonPress() {
    document.body.style.backgroundColor = "#316948";
    document.body.style.color = "black";
    document.getElementsByTagName("header")[0].style.backgroundColor = "#316948";
    document.getElementsByClassName("header")[0].style.backgroundColor = "#031C09";
    document.getElementsByClassName("header")[0].style.border = "#FFD8A6 solid 2px";
    document.getElementsByTagName("footer")[0].style.backgroundColor = "#031C09";
    document.getElementsByTagName("footer")[0].style.borderTop = "#FFD8A6 solid 1px";
    document.getElementsByClassName("projectSidebar")[0].style.backgroundColor = "#FFD8A6";
    document.getElementsByClassName("mainPage")[0].style.backgroundColor = "#FFEED9";
    let h2 = document.getElementsByTagName("h2");
    let i = 0;
    while(i < h2.length) {
        h2[i].style.color = "#031C09";
        h2[i].style.textShadow = "0.06rem 0.06rem #316948";
        i++;
    };
    let h3 = document.getElementsByTagName("h3");
    i = 0;
    while(i < h3.length) {
        h3[i].style.color = "#031C09";
        i++;
    };
    let button = document.getElementsByTagName("button");
    i = 0;
    while(i < button.length) {
        button[i].style.backgroundColor = "#031C09";
        i++;
    };  
    let img = document.getElementsByTagName("img");
    i = 0;
    while(i < img.length) {
        img[i].style.border = "#FFD8A6 solid 1px";
        i++;
    };  
};
function blackButtonPress() {
    document.body.style.backgroundColor = "#444";
    document.body.style.color = "black";
    document.getElementsByTagName("header")[0].style.backgroundColor = "#444";
    document.getElementsByClassName("header")[0].style.backgroundColor = "#111";
    document.getElementsByClassName("header")[0].style.border = "#BBB solid 2px";
    document.getElementsByTagName("footer")[0].style.backgroundColor = "#111";
    document.getElementsByTagName("footer")[0].style.borderTop = "#BBB solid 1px";
    document.getElementsByClassName("projectSidebar")[0].style.backgroundColor = "#BBB";
    document.getElementsByClassName("mainPage")[0].style.backgroundColor = "#FFF";
    let h2 = document.getElementsByTagName("h2");
    let i = 0;
    while(i < h2.length) {
        h2[i].style.color = "#111";
        h2[i].style.textShadow = "0.06rem 0.06rem #444";
        i++;
    };
    let h3 = document.getElementsByTagName("h3");
    i = 0;
    while(i < h3.length) {
        h3[i].style.color = "#111";
        i++;
    };
    let button = document.getElementsByTagName("button");
    i = 0;
    while(i < button.length) {
        button[i].style.backgroundColor = "#111";
        i++;
    };
    let img = document.getElementsByTagName("img");
    i = 0;
    while(i < img.length) {
        img[i].style.border = "#BBB solid 1px";
        i++;
    };
};
function randomButtonPress() {
    document.body.style.backgroundColor = randomColor();
    document.body.style.color = randomColor();
    document.getElementsByTagName("header")[0].style.backgroundColor = randomColor();
    document.getElementsByClassName("header")[0].style.backgroundColor = randomColor();
    document.getElementsByClassName("header")[0].style.border = `${randomColor()} solid 2px`;
    document.getElementsByTagName("footer")[0].style.backgroundColor = randomColor();
    document.getElementsByTagName("footer")[0].style.borderTop = `${randomColor()} solid 1px`;
    document.getElementsByClassName("projectSidebar")[0].style.backgroundColor = randomColor();
    document.getElementsByClassName("mainPage")[0].style.backgroundColor = randomColor();
    let h2 = document.getElementsByTagName("h2");
    let i = 0;
    while(i < h2.length) {
        h2[i].style.color = randomColor();
        h2[i].style.textShadow = `0.06rem 0.06rem ${randomColor()}`;
        i++;
    };
    let h3 = document.getElementsByTagName("h3");
    i = 0;
    while(i < h3.length) {
        h3[i].style.color = randomColor();
        i++;
    };
    let button = document.getElementsByTagName("button");
    i = 0;
    while(i < button.length) {
        button[i].style.backgroundColor = randomColor();
        i++;
    };
    let img = document.getElementsByTagName("img");
    i = 0;
    while(i < img.length) {
        img[i].style.border = `${randomColor()} solid 1px`;
        i++;
    };
};

redButton.addEventListener("click", redButtonPress);
greenButton.addEventListener("click", greenButtonPress);
blackButton.addEventListener("click", blackButtonPress);
randomButton.addEventListener("click", randomButtonPress);