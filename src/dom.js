import { conditions } from './weather.js'

const render = {

    current: cwData => {
        console.log(cwData)
        
        const location = document.querySelector('.location')
        location.textContent = cwData.location + ", " + cwData.country

        const date = document.querySelector('.date')
        date.textContent = cwData.date

        const temperature = document.querySelector('.temperature')
        temperature.textContent = cwData.tempC

        let img = document.createElement('img')
        img.src = './rain.gif'

        const weatherIcon = document.querySelector('.weather-icon')
        weatherIcon.appendChild(img)
       
      //  render.weatherIcon(cwData)
    },

    forecast: () => {
       
     //   document.querySelector('.test').textContent = "hey"
    },

    weatherTemplates: () => {
        // forecast
        const forecastTemp = document.querySelector('.forecast-results').content
        const forecastCopy = document.importNode(forecastTemp, true)
        document.querySelector('body').append(forecastCopy)
        // current info
        const currentTemp = document.querySelector('.current-results').content
        const currentCopy = document.importNode(currentTemp, true)
        document.querySelector('.search-weather').append(currentCopy)
        // more current info
        const moreTemp = document.querySelector('.more-results').content
        const moreCopy = document.importNode(moreTemp, true)
        document.querySelector('.header').append(moreCopy)
    },

    forecastDay: () => {

    },

    weatherIcon: (data) => {
        console.log(Object.values(conditions))
        const conditionReference = Object.values(conditions).filter(value => value.code === data.code)
        console.log(conditionReference)
        document.querySelector('img').attributes
    }

}


export { render }