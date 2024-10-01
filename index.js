const btn1 = document.querySelector("#btn1");
const subMenu = document.querySelector(".sub-menu")

const dropDown = (event)=> {
    subMenu.classList.add("active");
    console.log(subMenu);
    
}

const dropUp = (event)=> {
    subMenu.classList.remove("active");
    console.log(subMenu);
    
}

btn1.addEventListener("mouseover", dropDown);
btn1.addEventListener("mouseout", dropUp);
subMenu.addEventListener("mouseover", dropDown);
subMenu.addEventListener("mouseout", dropUp);