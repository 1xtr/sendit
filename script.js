function blur_body() {
    let blur = document.getElementById("blur");
    let navRight = document.getElementById("nav").style.right;
    if (navRight === "" || navRight === "-100%") {
        document.getElementById("nav").style.right = 0;
        document.getElementById("nav").style.display = "block";
        blur.classList.add("blur_active");
    } else if (navRight === "0px") {
        document.getElementById("nav").style.right = "-100%";
        document.getElementById("nav").style.display = "none";
        blur.classList.remove("blur_active");
    }
    //console.log(navRight);

}