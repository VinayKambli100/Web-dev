
let sumbit = document.getElementById("sumbit");
let result = document.getElementById("result");

function prn_result()
{
    let input_num = document.getElementById("input_num").value;
    if(input_num % 2 == 0)
    {
        result.textContent = "result is even " + input_num;
        console.log(input_num);
    }
    else
    {
        result.textContent = "result is odd " + input_num;
        console.log(input_num);
    }
}

sumbit.addEventListener("click", prn_result);