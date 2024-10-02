const btn1 = document.querySelector("#btn1");
const subMenu = document.querySelector(".sub-menu")
const toggle = document.querySelector(".toggle");
const toggleIcon = document.querySelector(".toggle-icon");
const day = document.querySelector(".forecast-daily");
const hourly = document.querySelector(".forecast-hourly");


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
        hourly.classList.remove("active");
        day.classList.add("active");
    }else {
        toggleIcon.classList.add("right");
        toggleIcon.classList.remove("left");
        day.classList.remove("active");
        hourly.classList.add("active");
    }
    console.log(toggle);
}

btn1.addEventListener("mouseover", dropDown);
btn1.addEventListener("mouseout", dropUp);
subMenu.addEventListener("mouseover", dropDown);
subMenu.addEventListener("mouseout", dropUp);
toggle.addEventListener("click", forecastToggle);