// let display = document.getElementById("display");

// let car = {type:"Fiat",model:"500",color:"white"};
// display.textContent = car.type;
// console.log(car.model);

let print_date = document.getElementById("print_date");
let time_btn = document.getElementById("time_btn");

function showtime()
{
    const dates = new Date();
    print_date.textContent = dates.toTimeString();
    console.log(dates);
}
time_btn.addEventListener("click",showtime);
