var blue_btn = document.getElementById("blue-btn");
blue_btn.addEventListener("click",bluefunction);

var red_btn = document.getElementById("red-btn");
red_btn.addEventListener("click",redfunction)

var yellow_btn = document.getElementById("yellow-btn");
yellow_btn.addEventListener("click",yellowfunction)

var green_btn = document.getElementById("green-btn");
green_btn.addEventListener("click",greenfunction);


function bluefunction()
{
    var elements = document.getElementById("body_ele");
    elements.classList.add("blue");
    elements.classList.remove("red");
}

function redfunction()
{
    var elements = document.getElementById("body_ele");
    elements.classList.add("red");
}

function yellowfunction()
{
    var elements = document.getElementById("body_ele");
    elements.classList.add("yellow");
}

function greenfunction()
{
    var elements = document.getElementById("body_ele");
    elements.classList.add("green");
}
