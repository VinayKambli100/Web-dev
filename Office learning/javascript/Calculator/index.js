
let add_btn = document.getElementById("add");
let sub_btn = document.getElementById("sub");
let div_btn = document.getElementById("div");
let multi_btn = document.getElementById("multi");

let result = document.getElementById("result");

function sub_fun()
{

}

function add_fun()
{
    let input_num1 = document.getElementById("num1").value;
    let input_num2 = document.getElementById("num2").value;
    let num1 = parseInt(input_num1);
    let num2 = parseInt(input_num2);

    switch(this.dataset.type){

        case 'add':
            result.textContent = num1 + num2;
            break;
            case 'sub':
                result.textContent = num1 - num2;
                break;
                    case 'div':
                    result.textContent = num1 / num2;
                    break;
                        case 'multi':
                            result.textContent = num1 * num2;
                            break;

    }
    
}


add_btn.addEventListener("click",add_fun);
sub_btn.addEventListener("click",add_fun);
div_btn.addEventListener("click",add_fun);
multi_btn.addEventListener("click",add_fun)

