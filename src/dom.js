 import { conditions } from './weather.js'

import { extract } from './w.js'

const render = {

    queryTime: performance => {
        document.querySelector('.query-time').textContent = performance.toFixed(2) + "ms to fetch weather"
    },

    tempToggle: e => {

        let currentTemp = document.querySelector('.temperature')
        let forecastTemp = document.querySelectorAll('.temp')

            if (e.target.dataset.unit === "c") {
                currentTemp.textContent = extract.currentWeather.tempF + "°F" 
                currentTemp.dataset.unit = "f"

                forecastTemp.forEach(ele => ele.textContent = extract.currentWeather.tempF + "°F" )
                forecastTemp.forEach(ele => ele.dataset.unit = "f")
            } else {
                currentTemp.textContent = extract.currentWeather.tempC + "°C" 
                currentTemp.dataset.unit = "c"

                forecastTemp.forEach(ele => ele.textContent = extract.currentWeather.tempC + "°C")
                forecastTemp.forEach(ele => ele.dataset.unit = "c")
            }
    },
 
    current: (cwData) => {
        console.log(cwData)
        
       
        const local = document.querySelector('.local-time')
        local.textContent = extract.formatTime(cwData.localTime)

        const time = document.querySelector('.time')
        time.textContent = extract.formatFullDate(cwData)

        const location = document.querySelector('.location')
        location.textContent = cwData.location + ", " + cwData.country

        const condition = document.querySelector('.condition')
        condition.textContent = cwData.state

        const temperature = document.querySelector('.temperature')
        temperature.dataset.unit = "c"
        temperature.textContent = cwData.tempC + "°C" 
        temperature.addEventListener('click', render.tempToggle)

        const icon = render.weatherIcon(cwData.state, cwData.localTime)
        
        let img = document.createElement('img')
        img.src = icon

        const weatherIcon = document.querySelector('.weather-icon')
            if (weatherIcon.childNodes.length === 1) {
                const weatherImg = document.querySelector('.weather-icon img')
                weatherImg.remove()
            }
        weatherIcon.appendChild(img)
    },

    weatherIcon: (state) => {

        if (state.includes("Clear") || state.includes("clear" )) {
            return '../src/images/clear.png'

        } else if (state.includes("Sunny") || state.includes("sunny")) {
            return '../src/images/sun.png'

        } else if (state.includes("Cloudy") || state.includes("cloudy")) {
            if (extract.currentWeather.dayStatus === 0) {
                return '../src/images/cloudy_night.png'
            } else return '../src/images/cloudy.png'

        } else if (state.includes("Rain") || state.includes("rain") || state.includes("drizzle")) {
            return '../src/images/rain.png'
            
        } else if (state.includes("Thunder") || state.includes("thunder") || state.includes("Thundery")) {
            return '../src/images/thunder.png'
            
        } else if (state.includes("Fog") || state.includes("fog") || state.includes("Mist")) {
            return '../src/images/mist.png'

        } else if (state.includes("Overcast")) {
            return '../src/images/overcast.png'
            
        } else if (state.includes("snow") || state.includes("Ice") || state.includes("sleet") || state.includes("Blizzard")) {
            return '../src/images/snow.png'
            
        } else if (state.includes("Thunder") || state.includes("thunder")) {
            return '../src/images/cake.png'
        }
    },

    test: () => {
        console.log(Object.values(conditions))
        const conditionReference = Object.values(conditions).filter(value => value.code === data.code)
        console.log(conditionReference)
    },

    iconData: (data) => {
        const icon = data.icon.slice(35)
        return icon
    },

    weatherTemplates: () => {
        if (document.querySelector('.forecast') === null) {
            // forecast
            const forecastTemp = document.querySelector('.forecast-results').content
            const forecastCopy = document.importNode(forecastTemp, true)
            document.querySelector('.container').appendChild(forecastCopy)
            // current info
            const currentTemp = document.querySelector('.current-results').content
            const currentCopy = document.importNode(currentTemp, true)
            document.querySelector('.search-weather').append(currentCopy)
            // more current info
            const moreTemp = document.querySelector('.more-results').content
            const moreCopy = document.importNode(moreTemp, true)
            document.querySelector('.header').append(moreCopy)
        } else return
    },

    forecastDay: () => {

        if (document.querySelector('.forecast > div')) {
            const parent = document.querySelector('.forecast')
            parent.replaceChildren()
        }

        // days/divs
        extract.forecastWeather.forEach((day, index) => {
            console.log(day)
            console.log(index)
            const forecast = document.querySelector('.forecast')
            const forecastDay = document.createElement('div')
            forecastDay.className = `day${index}`
            forecast.appendChild(forecastDay)
        })
        // date
        extract.forecastWeather.forEach((day, index) => {
            const date = document.createElement('div')
            const test = document.querySelector(`.day${index}`)
            date.className = "date"
            date.textContent = extract.formatShortDate(day.date)
            test.appendChild(date)
        })
        //  temp
        extract.forecastWeather.forEach((day, index) => {
            const temp = document.createElement('div')
            const dayIndex = document.querySelector(`.day${index}`)
            temp.className = "temp"
            temp.dataset.unit = "c"
            temp.textContent = day.maxtempc + "°C"
            dayIndex.appendChild(temp)
        })

        extract.forecastWeather.forEach((day, index) => {
            const condition = document.createElement('div')
            const dayIndex = document.querySelector(`.day${index}`)
            condition.className = "condition"
            condition.textContent = day.condition
            dayIndex.appendChild(condition)
        })

       // weather icon
        extract.forecastWeather.forEach((day, index) => {
            const icon = document.createElement('img')
            const parent = document.querySelector(`.day${index}`)
            icon.className = "icon"  
                console.log(day)
            const png = render.weatherIcon(day.condition)
      
            icon.src = png
            parent.appendChild(icon)
        })
    },
}


export { render }