// const process = require('dotenv').config()
// const fetch = require('node-fetch')
const apiKey = config.WEATHER_API_KEY

const daysOfWeekMap = {
    0: 'SUN', 
    1: 'MON', 
    2: 'TUE', 
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
let today = Date().split(' ')[0].toUpperCase() === 'THU' ? 'THUR' : Date().split(' ')[0].toUpperCase()



let wrapperDiv = document.querySelector('.wrapper')
wrapperDiv.innerHTML = ''
let weather = []

function getForecast(){
    fetch(`http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=Denver&days=7&aqi=no&alerts=no`)
    .then(response => response.json())
    .then(data => {
        weather = data.forecast.forecastday
        console.log(weather)
        weather.forEach(day => renderForecast(day))
    })
}
getForecast()

function renderForecast(day){
    let date = day.date
    let dateArray = date.split('-')
    dateArray[2] = date.split('-')[2].charAt(0) === '0' ? date.split('-')[2].charAt(1) : date.split('-')[2]
    let newDate = Date(dateArray.join('-'))
    let dayOfWeek = newDate.split(' ')[0].toUpperCase() === 'THU' ? 'THUR' : newDate.split(' ')[0].toUpperCase()
    let dayOfMonth = date.split('-')[2].charAt(0) === '0' ? date.split('-')[2].charAt(1) : date.split('-')[2]
    
    let dayDiv = document.createElement('div')
    let dayOfWeekDiv = document.createElement('div')
    let dateDiv = document.createElement('div')
    let barDiv = document.createElement('div')
    let weatherDiv = document.createElement('div')
    let tempDiv = document.createElement('div')
    let contentDiv = document.createElement('div')
    let precipDiv = document.createElement('div')
    let lowDiv = document.createElement('div')
    let degreesSpan = document.createElement('span')

    dayDiv.className = 'day'
    dayOfWeekDiv.className = 'day-of-week'
    dateDiv.className = 'date'
    barDiv.className = 'bar'
    weatherDiv.className = 'weather'
    tempDiv.className = 'temperature'
    contentDiv.className = 'content'
    precipDiv.className = 'precipitation'
    lowDiv.className = 'low'
    degreesSpan.className = 'degrees'

    dayOfWeekDiv.textContent = dayOfWeek
    dateDiv.textContent = dayOfMonth
    tempDiv.textContent = parseInt(day.day.maxtemp_f)
    degreesSpan.innerHTML = '&deg;'
    lowDiv.innerHTML = `<svg role="img" class="icon">
                            <use xlink:href="#low"></use>
                        </svg>
                        ${parseInt(day.day.mintemp_f)}&deg;`
    precipDiv.innerHTML = `<svg role="img" class="icon">
                            <use xlink:href="#precipitation"></use>
                         </svg>
                         ${day.day.daily_chance_of_rain}%`

    wrapperDiv.appendChild(dayDiv)
    dayDiv.appendChild(dayOfWeekDiv)
    dayDiv.appendChild(dateDiv)
    dayDiv.appendChild(barDiv)
    barDiv.appendChild(weatherDiv)
    barDiv.appendChild(tempDiv)
    barDiv.appendChild(contentDiv)
    contentDiv.appendChild(precipDiv)
    contentDiv.appendChild(lowDiv)
    tempDiv.appendChild(degreesSpan)

}





