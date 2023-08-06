
import { extract } from "./w.js"

document.querySelector('#test').addEventListener("click", async () => {
    const data = await searchQuery() 
    console.log(data)

    extract.current(data)
    extract.forecast(data)
    
    // then do something with extract.forecastWeather array
    
    extract.logForecast()
})

async function searchQuery() {
    try {
        const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=01aeb086078c4e5aaa5160639230208&q=london&days=3`, {mode: 'cors'});
        const data = await response.json();
        return data
    } catch (err) {
        console.log(err)
    }
}

