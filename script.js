const apiKey="6be748c31ad9789ffd0df219b8a079dd";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=bangalore";
async function checkWeather(){
    const response = await fetch(apiUrl +  `&appid=${apiKey}`);
    var data = await response.json();
    console.log(data);
}
checkWeather();