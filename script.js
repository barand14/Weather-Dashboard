const APIKey= "6d5bf6ad4e0fa649cc1dce9dd9d2ab1a"
const cities = ['Los Angeles', 'Tokyo', 'London', 'Paris', 'Sydney', 'Beijing', 'Moscow', 'Cairo','Dubai', 'Rio de Janeiro'];

cities.forEach(city => {
    fetchWeatherData(city);
});

const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}'
function fetchWeatherData(_city) {
    fetch(apiUrl)
    .then(response => {
    if (!response.ok) {
        throw new Error('City not found');
    }
    return response.json
    })
}
    

console.log(apiUrl)

