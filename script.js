
let input = document.querySelector("#input-box")
let Searchbtn = document.getElementById("submit-btn");


  
// if()



async function checkWeather(city){
    const API_key = "6aabb194cc3a9ac11af3a6ac8d3150a7";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}`;
     
    const weather_data  = await fetch(`${url}`).then(response => response.json());
    console.log(weather_data);
    let containerMain = document.querySelector("#containerMain")
    let front_body = document.querySelector("#front-body")
    let iconContainer = document.querySelector("#icon-container")
    if(weather_data.cod == `404` || weather_data.cod == '400')
    {
        document.querySelector("#error-container").style.display = "grid";
        document.querySelector("#countryName").style.display = "none";
        document.querySelector("#containerMain").style.display = "none";
        document.querySelector("#check").style.display = "none";
        document.querySelector("#weather-inp").style.height = "200px";
        front_body.style.height = "100%";
        
        document.querySelector("nav").style.padding = "0px";  
            return;
         }
         else {
             document.querySelector("#error-container").style.display = "none";
            containerMain.style.display = "flex";
            containerMain.style.backgroundColor = "black"
            containerMain.style.color = "white"
            document.querySelector("#check").style.display = "none";
            document.querySelector("#weather-inp").style.height = "200px";    
            front_body.style.height = "100%";
            iconContainer.style.backgroundColor = "black"
            iconContainer.style.boxShadow = "rbg(0. 0. 0. 0.8)"
            document.querySelector("nav").style.padding = "0px";    
        }
    let showOutput = document.querySelector(".showOutput").innerHTML = `${weather_data.name}`;
    let windOutput = document.querySelector(".windOutput").innerHTML = `${weather_data.wind.speed}%` ;
    let humOutput = document.querySelector(".humOutput").innerHTML = `${weather_data.main.humidity}%`;
    let weather_img = document.querySelector("#weather-img");
    if(weather_data.weather[0].main == 'Clouds') {
        weather_img.style.backgroundImage = 'url("https://assets.msn.com/weathermapdata/1/static/weather/Icons/taskbar_v10/Condition_Card/MostlyCloudyDayV2.svg")';
    }
    if(weather_data.weather[0].main == "Haze") {
        weather_img.style.backgroundImage = 'url("https://assets.msn.com/weathermapdata/1/static/weather/Icons/taskbar_v10/Condition_Card/D200PartlySunnyV2.svg")';
    } 
    if(weather_data.weather[0].main == 'lightRain') {
         weather_img.style.backgroundImage = 'url("https://assets.msn.com/weathermapdata/1/static/weather/Icons/taskbar_v10/Condition_Card/LightRainV3.svg")';
    }
    if(weather_data.weather[0].main == "Mist" ) { 
        weather_img.style.backgroundImage = 'url("https://assets.msn.com/weathermapdata/1/static/weather/Icons/taskbar_v10/Condition_Card/D200PartlySunnyV2.svg")';
    } 
    if(weather_data.weather[0].main == "Rain") {
         weather_img.style.backgroundImage = 'url(" https://assets.msn.com/weathermapdata/1/static/weather/Icons/taskbar_v10/Condition_Card/ModerateRainV2.svg")';
    }
    if(weather_data.weather[0].main == "Rain") {
         weather_img.style.backgroundImage = 'url(" https://assets.msn.com/weathermapdata/1/static/weather/Icons/taskbar_v10/Condition_Card/ModerateRainV2.svg")';
    }


    let degreOutput = document.querySelector(".degreOutput")
    let degreOutputStore = degreOutput.innerHTML = `${Math.round(weather_data.main.temp- 273.15)}<sup>°C</sup>` 
    document.querySelector(".nationality").innerHTML = `(${weather_data.sys.country})`

    
    // let preOutput = document.querySelector(".preOutput").innerHTML = `${}`;
    let degree_describtion = document.querySelector(".degree-description").innerHTML = `${weather_data.weather[0].description} `;
    input.value = "";
}

Searchbtn.addEventListener("click", function() {
    checkWeather(input.value);
});
function SearchbtnFunction() {


        let randomValue; 

        for (let i = 0; i < 10; i++) {
        randomValue = Math.floor(Math.random() * (100 - 1) + 1);
        
        const rectangle = document.querySelectorAll('.rectangle')[i]; 
        const percentage = document.querySelectorAll('.presentage')[i];

        if (rectangle) {
            rectangle.style.height = `${randomValue}%`; 
        } else {
            console.warn("Rectangle element not found for index:", i); 
        }

        if (percentage) {
            percentage.innerHTML = `${randomValue}%`;
        } else {
            console.warn("Percentage element not found for index:", i); 
        }
        const mainRectangle = document.querySelectorAll('.rectangle')[i];
        if (mainRectangle) { 
            if (randomValue < 50) {
                mainRectangle.style.backgroundColor = "rgb(21, 255, 0)";
            } else {
                mainRectangle.style.backgroundColor = "rgb(196, 6, 0)";
                }
            }
        } 
}
