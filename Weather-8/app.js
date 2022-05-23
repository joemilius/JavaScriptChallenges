require('dotenv').config({path: /Weather-8/.env})
const fetch = require('node-fetch')

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
fetch(`http://api.weatherapi.com/v1/forecast.json?key=${process.env.WEATHER_API}&q=Denver&days=7&aqi=no&alerts=no`)
.then(response => response.json())
.then(data => console.log(data))