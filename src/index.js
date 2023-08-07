import './style.css';
import { extract } from "./w.js"



document.querySelector('#form').addEventListener('submit', async (e) => {
    e.preventDefault()

    const form = document.querySelector('#form')
    const formData = new FormData(form)
    const location = getLocation(formData)
    const data = await searchQuery(location)
    console.log(data) // location input
    extract.resetForecast()
    // extract.current(data)
    extract.forecast(data)
    
    // // then do something with extract.forecastWeather array
    extract.logForecast()
})

async function searchQuery(location) {
   console.log(location)
   
    try {
        const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=01aeb086078c4e5aaa5160639230208&q=${location}&days=3`, {mode: 'cors'});
        
        // function that checks error codes
        // if (response.status !== 200) {
        //     throw new Error (response/* create an error for a non-successful fetch */);
        // }

        const data = await response.json();
        return data
    } catch (err) {
        console.log(err)
    }
}


function getLocation(formData) {
   const test = formData.get('location')
   return test
}   

