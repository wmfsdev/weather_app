import { format } from 'date-fns'

const extract = {

    currentWeather: {},
    forecastWeather: [],

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

    current: data => {
        extract.currentWeather = {
            date: data.forecast.forecastday[0].date,
            location: data.location.name,
            country: data.location.country,
            tempC: data.current.temp_c,
            tempF: data.current.temp_f,
            state: data.current.condition.text,
            code: data.current.condition.code,
            icon: data.current.condition.icon
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


    logForecast: () => {
        console.log(extract.currentWeather)
        //console.log(extract.forecastWeather)
    },

}

 export { extract }
 
    //     filter: data => {
    //     const test = data.forecast.forecastday
    //     console.log(test)

    //     const userNames = Object.keys(test)
    //         .filter((key) => key.includes("date"))
    //         .reduce((object, key) => {
    //             return Object.assign(object, {
    //             [key]: test[key]
    //             });
    //     }, {});

    //     console.log(userNames);
    // },

    // forecast: data => {
    // // data.forecast.forecastday.forEach(day => extract.dailyForecast(day))
    //     const forecast = data.forecast.forecastday
    //         for ( let i = 0 ; i < forecast.length ; i++) {
    //             //const test =    
    //             extract.forecastWeather.push(extract.dailyForecast(forecast, i))
    //            // extract.forecastWeather.push(test)
    //         }
    // }, 

    // dailyForecast: (fdata, index) => {
    //     console.log(fdata)
    //     const test = {
    //         date: fdata[index].date,
    //         maxtempc: fdata[index].day.maxtemp_c,
    //         condition: fdata[index].day.condition.text
    //     }
    //     return test
    //     //extract.forecastWeather.push(test)
    // },