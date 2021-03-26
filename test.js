let body = document.getElementById('body');
// let bodyWidth = body.scrollWidth;
let cell = document.getElementById('clientWidth');
let btn = document.getElementById('button');
function click() {
    console.log(body.scrollWidth);
    // alert(curWidth);

    cell.innerHTML = String(body.scrollWidth);
}

window.onload = () => {
    btn.addEventListener("click", click);
};