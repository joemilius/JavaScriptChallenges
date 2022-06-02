// const process = require('dotenv').config()
// const fetch = require('node-fetch')
const apiKey = config.WEATHER_API_KEY

const daysOfWeekMap = {
    0: 'SUN', 
    1: 'MON', 
    2: 'TUES', 
    3: 'WED', 
    4: 'THUR', 
    5: 'FRI', 
    6: 'SAT'
}

const iconNameToSizeMap = {
    cloudy: { width: 264, height: 166},
    sunny: { width: 208, height: 213},
    stormy: { width: 246, height: 187},
    snowy: { width: 230, height: 196},
    'partly-cloudy': {width: 230, height:209},
    rainy: { width: 160, height: 222},
}
/*
Find Weather Api
Fetch the week's weather and update the html with values for the weather of each day of the week
Fetch is currently only giving the first three days instead of the first 7 days
*/
let today = 'SAT'
//Date().split(' ')[0].toUpperCase()
console.log(today)
let day2 = ''
let day3 = ''

for(let key in daysOfWeekMap){
    let second
    let third
    if(today === 'FRI'){
        second = 6
        third = 0
        day2 = daysOfWeekMap[second]
        day3 = daysOfWeekMap[third]
    }else if(today === 'SAT'){
        second = 0
        third = 1
        day2 = daysOfWeekMap[second]
        day3 = daysOfWeekMap[third]
    }else if(today === daysOfWeekMap[key]){
        second = parseInt(key) + 1
        third = parseInt(key) + 2
        day2 = daysOfWeekMap[second]
        day3 = daysOfWeekMap[third]
        
    }
    console.log(day2, day3)
}

let wrapperDiv = document.querySelector('.wrapper')
//wrapperDiv.innerHTML = ''
let weather = []

// function getForecast(){
//     fetch(`http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=Denver&days=7&aqi=no&alerts=no`)
//     .then(response => response.json())
//     .then(data => {
//         weather = data.forecast.forecastday
//         weather.forEach(day => renderForecast(day))
//     })
// }
// getForecast()

function renderForecast(day){
    console.log(day)
    let dayDiv = document.createElement('div')

}




