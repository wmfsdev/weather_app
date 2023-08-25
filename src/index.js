import './style.css';
import { extract } from "./weather.js"
import { render } from './dom.js'

document.querySelector('#form').addEventListener('submit', async (e) => {
    e.preventDefault()
    const form = document.querySelector('#form')
    const formData = new FormData(form)
    const location = extract.getLocation(formData)
    extract.getTime()
    const data = await searchQuery(location)
    const performance = extract.getTime()
    render.queryTime(performance)
    extract.resetForecast()
    extract.current(data)
    extract.forecast(data)
    render.weatherTemplates()
    render.current(extract.currentWeather)
    render.forecastDay()
})

async function searchQuery(location) {
   console.log(location)
   
    try {
        const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=24200e92333f4ded9a0184300232308&q=${location}&days=7`, {mode: 'cors'});
        if (response.status !== 200) {
            throw new Error (response/* create an error for a non-successful fetch */);
            // "response"
        }
        const data = await response.json();
        return data
    } catch (err) {
        const validSearch = document.querySelector('#location')
        validSearch.value = "Please Enter Valid Location"
    }
}