import { conditions } from './weather.js'

import { extract } from './w.js'

const render = {

    

    current: cwData => {
        console.log(cwData)
        
        const location = document.querySelector('.location')
        location.textContent = cwData.location + ", " + cwData.country

        const date = document.querySelector('.date')
        date.textContent = extract.formatFullDate(cwData)

        const condition = document.querySelector('.condition')
        condition.textContent = cwData.state

        const temperature = document.querySelector('.temperature')
        temperature.textContent = cwData.tempC + "°C"

        const icon = render.iconData(cwData)
        let img = document.createElement('img')
        img.src = `https://cdn.weatherapi.com/weather/128x128/${icon}`

        const weatherIcon = document.querySelector('.weather-icon')
            if (weatherIcon.childNodes.length === 1) {
                const weatherImg = document.querySelector('.weather-icon img')
                weatherImg.remove()
            }
        weatherIcon.appendChild(img)
       
      //  render.weatherIcon(cwData)
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
            // console.log(render.iconData(day))
            // iconCode = render.iconData(day)
            // console.log(iconCode)
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

    // weatherIcon: (data) => {
    //     console.log(Object.values(conditions))
    //     const conditionReference = Object.values(conditions).filter(value => value.code === data.code)
    //     console.log(conditionReference)
    //     document.querySelector('img').attributes
    // }

}


export { render }