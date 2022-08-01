var string = ["blue","red","yellow","green"]
var elements = document.getElementById("body_ele");
function colorchangefunction(color)
{
    elements.classList.remove("blue","red","yellow","green");
    elements.classList.add(color);
}
function random(){
    var test = Math.floor(Math.random() * 4);
    var value= string[test];
    elements.classList.remove("blue","red","yellow","green");
    elements.classList.add(value);
}