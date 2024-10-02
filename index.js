const btn1 = document.querySelector("#btn1");
const subMenu = document.querySelector(".sub-menu")
const toggle = document.querySelector(".toggle");
const toggleIcon = document.querySelector(".toggle-icon");



const dropDown = (event)=> {
    subMenu.classList.add("active");
}

const dropUp = (event)=> {
    subMenu.classList.remove("active");
}

const forecastToggle = ()=> {
    if (toggleIcon.classList.contains("right")) {
        toggleIcon.classList.add("left");
        toggleIcon.classList.remove("right");
    }else {
        toggleIcon.classList.add("right");
        toggleIcon.classList.remove("left");
    }
    console.log(toggle);
    
}

btn1.addEventListener("mouseover", dropDown);
btn1.addEventListener("mouseout", dropUp);
subMenu.addEventListener("mouseover", dropDown);
subMenu.addEventListener("mouseout", dropUp);
toggle.addEventListener("click", forecastToggle);