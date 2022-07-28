//document.getElementById("count").innerText = 5;

let count_El = document.getElementById("count_num");
let save_El = document.getElementById("entries");

let count = 0;

function incremant()
{
    count++;
    count_El.textContent = count;
}

function save()
{
    let count_string = count + " - ";
    save_El.textContent += count_string;

    count_El.textContent = 0;
    count = 0;
}

let value = 5;
