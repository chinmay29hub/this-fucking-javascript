// import WEATHER_API from "./apikey.js"
/**
 * Weather App
 * TODO: Complete getWeatherData() to return json response Promise
 * TODO: Complete searchCity() to get user input and get data using getWeatherData()
 * TODO: Complete showWeatherData() to set the data in the the html file from response
 */

// API_KEY for maps api
let API_KEY = "you api key"

/**
 * Retrieve weather data from openweathermap
 * HINT: Use fetch()
 * HINT: URL should look like this: 
 * https://api.openweathermap.org/data/2.5/weather?q=detroit&appid={your api key}&units=imperial
 */
const getWeatherData = (city) => {
  const URL = "https://api.openweathermap.org/data/2.5/weather";
  const FULL_URL = `${URL}?q=${city}&appid=${API_KEY}&units=imperial`
  //HINT: Use template literals to create a url with input and an API key

  //CODE GOES HERE
  const weatherPromise  = fetch(FULL_URL);
  return weatherPromise.then((response) => {
    return response.json();
  })
}
// getWeatherData("arizona")

/**
 * Retrieve city input and get the weather data
 * HINT: Use the promise returned from getWeatherData()
 */
document.getElementById("sr").onclick = () => {
  const city = document.getElementById('city-input').value;
  // CODE GOES HERE
  getWeatherData(city).then((res)=>{
    showWeatherData(res);
  }).catch((error)=>{
    console.log(error);
    console.log("Something happend");
  })

  const end = document.getElementById("clr-btn")
// console.log(end)
  end.onclick = () => {
    clear()
}
}



/**
 * Show the weather data in HTML
 * HINT: make sure to console log the weatherData to see how the data looks like
 */
const showWeatherData = (weatherData) => {
  //CODE GOES HERE
  const city = document.getElementById("city-name")
  const weather = document.getElementById("weather-type")
  const temperature = document.getElementById("temp")
  const minTemp = document.getElementById("min-temp")
  const maxTemp = document.getElementById("max-temp")

  city.textContent = weatherData.name;
  weather.textContent = weatherData.weather[0].main;
  temperature.textContent = weatherData.main.temp;
  minTemp.textContent = weatherData.main.temp_min;
  maxTemp.textContent = weatherData.main.temp_max;
  
}



const clear = () => {
  const cityIn = document.getElementById("city-input")
  const city = document.getElementById("city-name")
  const weather = document.getElementById("weather-type")
  const temperature = document.getElementById("temp")
  const minTemp = document.getElementById("min-temp")
  const maxTemp = document.getElementById("max-temp")

  cityIn.value = ""
  city.textContent = "----"
  weather.textContent = "----"
  temperature.innerHTML= `<span id="temp">--</span>`
  minTemp.innerHTML = `<span id="min-temp">--</span>`
  maxTemp.innerHTML = `<span id="max-temp">--</span>`
}

