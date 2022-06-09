document.body.style.backgroundColor = "green";
document.getElementById("body").style.backgroundColor = "grey"
document.getElementById("body").style.textAlign = "center"
document.getElementById("body").style.width = "20%"
document.getElementById("body").style.margin = "20%"
let p;
let r;
let t;
let btn = document.getElementById("btn");
function calculate() {
    p = document.getElementById("P").value;
    r = document.getElementById("R").value;
    t = document.getElementById("T").value;
    btn.innerHTML = "Result : " + (p * r * t) / 100;
}
