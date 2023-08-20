import { conditions } from './weather.js'

import { extract } from './w.js'

const render = {

    tempToggle: () => {
        document.querySelector('.temperature').addEventListener('click', (e) => {

            let temperature = document.querySelector('.temperature')

            if (e.target.dataset.unit === "c") {
                temperature.textContent = extract.currentWeather.tempF + "°F" 
                temperature.dataset.unit = "f"
            } else {
                temperature.textContent = extract.currentWeather.tempC + "°C" 
                temperature.dataset.unit = "c"
            }
        })
    },

    current: (cwData) => {
        console.log(cwData)
        
        const location = document.querySelector('.location')
        location.textContent = cwData.location + ", " + cwData.country

        const date = document.querySelector('.date')
        date.textContent = extract.formatFullDate(cwData)

        const condition = document.querySelector('.condition')
        condition.textContent = cwData.state

        const temperature = document.querySelector('.temperature')
        temperature.dataset.temp = "c"
        temperature.textContent = cwData.tempC + "°C"
      
        const test = render.weatherIcon(cwData)
        console.log(test)

        //const icon = render.iconData(cwData)
        let img = document.createElement('img')
        img.src = test

// `https://cdn.weatherapi.com/weather/128x128/${icon}`

        const weatherIcon = document.querySelector('.weather-icon')
            if (weatherIcon.childNodes.length === 1) {
                const weatherImg = document.querySelector('.weather-icon img')
                weatherImg.remove()
            }
        weatherIcon.appendChild(img)
       
      //  render.weatherIcon(cwData)
    },

    weatherIcon: (data) => {
        const state = data.state
        console.log(data)
        if (state.includes("Clear") || state.includes("clear" )) {
            return '../src/clear.png'

        } else if (state.includes("Sunny") || state.includes("sunny")) {
            return '../src/sun.png'

        } else if (state.includes("Cloudy") || state.includes("cloudy")) {
            return '../src/cake.png'

        } else if (state.includes("Rain") || state.includes("rain") || state.includes("drizzle")) {
            return '../src/cake.png'
            

        } else if (state.includes("Thunder") || state.includes("thunder") || state.includes("Thundery")) {
            return '../src/cake.png'
            
        } else if (state.includes("Fog") || state.includes("fog") || state.includes("Mist")) {
            return '../src/cake.png'

        } else if (state.includes("Thunder") || state.includes("thunder")) {
            return '../src/cake.png'
            
        } else if (state.includes("Thunder") || state.includes("thunder")) {
            return '../src/cake.png'
            
        } else if (state.includes("Thunder") || state.includes("thunder")) {
            return '../src/cake.png'
            
        } else if (state.includes("Thunder") || state.includes("thunder")) {
            return '../src/cake.png'
            
        } else if (state.includes("Thunder") || state.includes("thunder")) {
            return '../src/cake.png'
            
        } else if (state.includes("Thunder") || state.includes("thunder")) {
            return '../src/cake.png'
            
        }
    
    },

    test: () => {
         console.log(Object.values(conditions))
        const conditionReference = Object.values(conditions).filter(value => value.code === data.code)
        console.log(conditionReference)
      document.querySelector('img').attributes
    },

    iconData: (data) => {
        const icon = data.icon.slice(35)
        return icon
    },

    forecast: () => {
       
     //   document.querySelector('.test').textContent = "hey"
    },

    weatherTemplates: () => {
        if (document.querySelector('.forecast') === null) {
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
            test.textContent = extract.formatShortDate(day.date)
            test.appendChild(date)
        })
        //  temp
        extract.forecastWeather.forEach((day, index) => {
            const temp = document.createElement('div')
            const some = document.querySelector(`.day${index}`)
            temp.className = "temp"
            temp.textContent = day.maxtempc + "°C"
            some.appendChild(temp)
        })
        // weather icon
        extract.forecastWeather.forEach((day, index) => {
            const icon = document.createElement('img')
            const parent = document.querySelector(`.day${index}`)
            icon.className = "icon"
            icon.src = `https://cdn.weatherapi.com/weather/128x128/${render.iconData(day)}`
            parent.appendChild(icon)
        })

        // extract.forecastWeather.forEach((day, index) => {
        //     const icon = document.createElement('div')
        //     const parent = document.querySelector(`.day${index}`)
        //     icon.className = "icon"
        //     console.log(day.icon)
        //     icon.style.backgroundImage = url(https://www.theodinproject.com/assets/img-learn-7f69020a563b2631283ca49bfc9a8898cda89673b184fd5becc13afec16cc784.svg)
        //     parent.appendChild(icon)
        //     //url(${day.icon})
        // })

    },

   

}


export { render }