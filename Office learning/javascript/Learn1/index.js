let display = document.getElementById("display");
let increse_btn = document.getElementById("increse");
let save_btn = document.getElementById("save");
let result_print= document.getElementById("result");

var num = 0;

function display_num_fun()
{
    num++;
    display.textContent = num;
}

function display_result_fun()
{
    let result = num + " - "
    result_print.textContent += result;

    display.textContent = 0;
    num = 0;
}

increse_btn.addEventListener("click", display_num_fun);
save_btn.addEventListener("click",display_result_fun);

let test = (10 > 5) ? "output1" : "output 2";
console.log(test);
