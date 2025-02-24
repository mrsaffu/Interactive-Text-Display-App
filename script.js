let card2 = document.getElementById("input1")
let bold=document.getElementById("bold")
let textLeft = document.getElementById("left")
let textCenter = document.getElementById("center")
let textRight = document.getElementById("right")

function addText(){
let text = document.getElementById("text")
// console.log(bgcolor.value);
card2.value=text.value;
}

function fontSize(){
    let fontSize= document.getElementById("font-size")
    // console.log(fontSize.value);
    card2.style.fontSize=`${fontSize.value}px`

}

function fontBold(){
    card2.classList.toggle("boldFont")
    bold.classList.toggle("select")

}

function fontItalic(){
 let italicSelection = document.getElementById("italic");
 card2.classList.toggle("fontItalic");
 italicSelection.classList.toggle("select")
}

function fontUnderLine(){
    let fontUnderLine = document.getElementById("textUnderLine")
    fontUnderLine.classList.toggle("select")
    card2.classList.toggle("fontUnderLine")
}

function textAlignLeft(){
    textLeft.classList.toggle("select");

    textCenter.classList.remove("select")
    textRight.classList.remove("select")

    card2.classList.remove("right")
    card2.classList.remove("center")
    card2.classList.toggle("left")
}

function textAlignCenter(){
    textCenter.classList.toggle("select");
    textLeft.classList.remove("select")
    textRight.classList.remove("select")
    card2.classList.remove("left")
    card2.classList.remove("right")
    card2.classList.toggle("center")
}

function textAlignRight(){
    textRight.classList.toggle("select");
    textLeft.classList.remove("select")
    textCenter.classList.remove("select")
    card2.classList.remove("center")
    card2.classList.toggle("right")
}

function changeBgColor(){
   let changeBgColor = document.getElementById("bgColor");
    card2.style.backgroundColor=changeBgColor.value;
    // console.log(changeBgColor.value);
}

function changeFontColor(){
    let changeColor = document.getElementById("color");
     card2.style.color=changeColor.value;
     console.log(changeColor.value);
 }