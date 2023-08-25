import { format } from 'date-fns'

const extract = {

    times: [],
    currentWeather: {},
    forecastWeather: [],

    getLocation: formData => {
        const test = formData.get('location')
        return test
    },

    getTime: () => {
        const time = performance.now()
        console.log(time)
        extract.times.push(time)
        if (extract.times.length === 2) {
            const test = extract.times[1] - extract.times[0]
            console.log(test + ' milliseconds')
            extract.times = []
            return test
        } else return
    },

    formatFullDate: cwData => {
        const due = new Date(cwData.date);
        const formattedDate = format(due, `EEEE do LLL`);
        console.log(formattedDate)
        return formattedDate
    },

    formatShortDate: date => {
        const due = new Date(date);
        const formattedDate = format(due, `EEEE do`);
        console.log(formattedDate)
        return formattedDate
    },

    formatTime: date => {
        const time = new Date(date)
        const formattedTime = format(time, `p`)
        console.log(formattedTime)
        return formattedTime
    },

    current: data => {
       
        extract.currentWeather = {
            date: data.forecast.forecastday[0].date,
            location: data.location.name,
            country: data.location.country,
            localTime: data.location.localtime,
            dayStatus: data.current.is_day,
            tempC: data.current.temp_c,
            tempF: data.current.temp_f,
            state: data.current.condition.text,
            code: data.current.condition.code,
          //  icon: data.current.condition.icon
        }
    },

    resetForecast: () => {
        if (extract.forecastWeather.length !== 0) {
            extract.forecastWeather = []
        } else return
    },

    forecast: data => {
        const forecastDays = data.forecast.forecastday
        forecastDays.splice(0,1) // don't need "first" day as this is already displayed as current
        forecastDays.forEach(day => extract.forecastWeather.push(extract.dailyForecast(day)))
    }, 
    
    dailyForecast: (fdata) => { // will need to ignore the first indices
                                // as its the current as well
        console.log(fdata)
        const daily = {
            date: fdata.date,
            maxtempc: fdata.day.maxtemp_c,
            condition: fdata.day.condition.text,
            icon: fdata.day.condition.icon 
        }
        return daily
    },
}

export { extract }