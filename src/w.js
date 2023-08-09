
const extract = {

    currentWeather: {},
    forecastWeather: [],

    current: data => {
        extract.currentWeather = {
            date: data.forecast.forecastday[0].date,
            location: data.location.name,
            country: data.location.country,
            tempC: data.current.temp_c,
            tempF: data.current.temp_f,
            state: data.current.condition.text,
            code: data.current.condition.code
        }
    },

    resetForecast: () => {
        if (extract.forecastWeather.length !== 0) {
            extract.forecastWeather = []
        } else return
    },

    forecast: data => {
        const forecastDays = data.forecast.forecastday
        forecastDays.forEach(day => extract.forecastWeather.push(extract.dailyForecast(day)))
    }, 
    
    dailyForecast: (fdata) => {
        const test = {
            date: fdata.date,
            maxtempc: fdata.day.maxtemp_c,
        }
        return test
    },


    logForecast: () => {
        console.log(extract.currentWeather)
        //console.log(extract.forecastWeather)
    },



    // filter: data => {
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

}

 export { extract }