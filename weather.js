const apiKey = "5848cef567f8ca5af68bf4abd2d461dd";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=morocco";

async function checkWeather(){

    const response = await fetch(apiUrl + `&appid=${apiKey}`);
    var data = await response.json();
    console.log(data);

}
checkWeather();