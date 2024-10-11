const btn1 = document.querySelector("#btn1");
const subMenu = document.querySelector(".sub-menu")
const toggle = document.querySelector(".toggle");
const toggleIcon = document.querySelector(".toggle-icon");
const day = document.querySelector(".forecast-daily");
const hourly = document.querySelector(".forecast-hourly");
const leftArrow = document.querySelector("#left");
const rightArrow = document.querySelector("#right");
const items = document.querySelector(".scroll-items");
let sliderLength = 0;
let currentWeather = null;
let hourlyWeather = null;
let days = [[],[],[],[],[],[],[]];


// fetching from weather API
const getData = ()=> {
    fetch("https://api.open-meteo.com/v1/forecast?latitude=44.95&longitude=-93.10&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m")
    .then(response => response.json())
    .then(forecast => {
        currentWeather = forecast.current;
        hourlyWeather = forecast.hourly.temperature_2m;
        weatherNow();
        graphForecast();
        createChart();
    });
};


// updating current weather
const weatherNow = ()=> {
    const currentTemp = document.querySelector("#current-temp");
    const currentWind = document.querySelector("#current-wind");

    const temp = Math.round(convertTemp(currentWeather.temperature_2m));
    currentTemp.innerHTML = temp + "°";
    currentWind.innerHTML = currentWeather.wind_speed_10m + " km/h";
}


// converting celsius to fahrenheit
const convertTemp = (temp)=> {
    return (temp * 9/5) + 32
}


// adding forecast hourly temp to array
const graphForecast = ()=> {
    let counter = 0;
    for (let i=0; i<days.length; i++) {
        let day = days[i];
        for (let j=0; j<24; j++) {
            day.push(hourlyWeather[counter]);
            counter++;
        }
    }
}


// creating line chart
const createChart = ()=> {
    const xValues = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24];
    const chart = new Chart("line-graph", {
        type: "line",
        data: {
            labels: xValues,
            size: 44,
            datasets: [{
                label: 'Sunday',
                fill: false,
                borderColor: "blue",
                data: days[0]
            },{
                label: 'Monday',
                fill: false,
                borderColor: "red",
                data: days[1],
            },{
                label: 'Tuesday',
                fill: false,
                borderColor: "yellow",
                data: days[2],
            },{
                label: 'Wednesday',
                fill: false,
                borderColor: "green",
                data: days[3],
            },{
                label: 'Thursday',
                fill: false,
                borderColor: "black",
                data: days[4],
            },{
                label: 'Friday',
                fill: false,
                borderColor: "Orange",
                data: days[5],
            },{
                label: 'Saturday',
                fill: false,
                borderColor: "Pink",
                data: days[6],
            }]
        },
        options: {
            plugins: {
                legend: {
                    labels: {
                        // This more specific font property overrides the global property
                        font: {
                            size: 44
                        }
                    }
                }
            }
        }
    });

}



const dropDown = (event)=> {
    subMenu.classList.add("active");
}


const dropUp = (event)=> {
    subMenu.classList.remove("active");
}


// toggle between days or hours
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
}


// activate animation to slide images to the left
const slideLeft = ()=> {
    if (sliderLength > 0 && sliderLength <= 3) {
        sliderLength = sliderLength - 1;
    } else {
        return;
    }

    switch(sliderLength) {
        case 0:
            items.setAttribute("style", "animation: prev1 0.5s ease-in forwards");
            break;
        case 1:
            items.setAttribute("style", "animation: prev2 0.5s ease-in forwards");
            break;
        case 2:
            items.setAttribute("style", "animation: prev3 0.5s ease-in forwards");
            break;
        default:
            break;
    }
}


// activate animation to slide images to the right
const slideRight = ()=> {

    if (sliderLength >= 0 && sliderLength < 3) {
        sliderLength = sliderLength + 1;
    } else {
        return;
    }

    switch(sliderLength) {
        case 1:
            items.setAttribute("style", "animation: next1 0.5s ease-in forwards");
            break;
        case 2:
            items.setAttribute("style", "animation: next2 0.5s ease-in forwards");
            break;
        case 3:
            items.setAttribute("style", "animation: next3 0.5s ease-in forwards");
            break;
        default:
            break;
    }
}


getData();

btn1.addEventListener("mouseover", dropDown);
btn1.addEventListener("mouseout", dropUp);
subMenu.addEventListener("mouseover", dropDown);
subMenu.addEventListener("mouseout", dropUp);
toggle.addEventListener("click", forecastToggle);
leftArrow.addEventListener("click", slideLeft);
rightArrow.addEventListener("click", slideRight);
