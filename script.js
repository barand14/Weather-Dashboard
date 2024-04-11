const apiKey= "cfa5f91ed560008adac47d05c9dd8520"
const cities = ['Los Angeles', 'Tokyo', 'London', 'Paris', 'Sydney', 'Beijing', 'Moscow', 'Cairo','Dubai', 'Rio de Janeiro', 'Lome'];
const searchButton = document.getElementById("search-button")
const searchInput = document.getElementById("city-input")

searchButton.addEventListener("click", function(){
    console.log(searchInput.value)
    forecastCall(searchInput.value)
    currentCall(searchInput.value)
})

    
function forecastCall(city){
   fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`)
    .then(response => response.json())
    .then(weatherData=> {

        console.log(weatherData)

         for (let i = 5; i < weatherData.list.length; i += 8) {

            console.log(`Date: ${weatherData.list[i].dt_txt}`);
            console.log(`Temperature: ${weatherData.list[i].main.temp}°C`);
            console.log('Weather: ${weatherData.list[i].weather[0].description}');
            console.log('---');


            const cardDiv = document.createElement("div")
        cardDiv.setAttribute("class", "forecastCard")

        const date = document.createElement("h4")
        date.textContent = weatherData.list[i].dt_txt

        const tempurature = document.createElement("p")
        tempurature.textContent = weatherData.list[i].main.temp + " C"

        // other variables for date, humidity, wind speed, icon
        
        cardDiv.append(date, tempurature)
        document.getElementById("forecast").append(cardDiv)

    }



    })
   
    
}

function currentCall(city){
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
     .then(response => response.json())
     .then(weatherData=> {
    console.log(weatherData)

        const cardDiv = document.createElement("div")
        cardDiv.setAttribute("class", "currentCard")

        const cityName = document.createElement("h2")
        cityName.textContent = weatherData.name

        const tempurature = document.createElement("h3")
        tempurature.textContent = weatherData.main.temp + " C"

        // other variables for date, humidity, wind speed, icon
        
        cardDiv.append(cityName, tempurature)
        document.getElementById("current-weather").append(cardDiv)
     })
    
     
 }

