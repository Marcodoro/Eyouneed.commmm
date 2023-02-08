const open = document.querySelector(".open");
const hamburger  = document.querySelector(".hamburger");

document.addEventListener("DOMContentLoaded", function() {
    let clicked = false;
    const open = document.querySelector(".open");
    const hamburger = document.querySelector(".hamburger");
  
    hamburger.addEventListener("click", function() {
        if (clicked == false) {
            clicked = true;
            open.style.width = "200px";
            console.log(open.style.width);
        }
        else if (clicked == true) {
            clicked = false;
            open.style.width = "0px";
            console.log(open.style.width);
        }
    });
  });