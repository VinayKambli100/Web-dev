var string = ["blue","red","yellow","green"]
var elements = document.getElementById("body_ele");
function colorchangefunction(color)
{
    elements.classList.remove("blue","red","yellow","green");
    elements.classList.add(color);
}
function random(){
    elements.classList.remove("blue","red","yellow","green");
    elements.classList.add(test());
}
function test()
{   var value = string[Math.floor(Math.random() * 4)];
    return value;
}