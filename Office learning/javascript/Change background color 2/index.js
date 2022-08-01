var string = ["blue","red","yellow","green"]

var blue_btn = document.getElementById("blue-btn");
blue_btn.addEventListener("click",bluefunction);

var red_btn = document.getElementById("red-btn");
red_btn.addEventListener("click",redfunction)

var yellow_btn = document.getElementById("yellow-btn");
yellow_btn.addEventListener("click",yellowfunction)

var green_btn = document.getElementById("green-btn");
green_btn.addEventListener("click",greenfunction);

var random_btn = document.getElementById("random");
random_btn.addEventListener("click",randomfunction);

function bluefunction()
{
    var elements = document.getElementById("body_ele");
    elements.classList.remove("blue","red","yellow","green");
    elements.classList.add("blue");
}

function redfunction()
{
    var elements = document.getElementById("body_ele");
    elements.classList.remove("blue","red","yellow","green");
    elements.classList.add("red");
}

function yellowfunction()
{
    var elements = document.getElementById("body_ele");
    elements.classList.remove("blue","red","yellow","green");
    elements.classList.add("yellow");
}

function greenfunction()
{
    var elements = document.getElementById("body_ele");
    elements.classList.remove("blue","red","yellow","green");
    elements.classList.add("green");
}

function randomfunction()
{
    var test = Math.floor(Math.random() * 4);
    var elements = document.getElementById("body_ele")
    elements.classList.remove("blue","red","yellow","green");
    elements.classList.add(string[test])
}
