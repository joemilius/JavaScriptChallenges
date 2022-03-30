let previousMonthButton = document.querySelector('div.previous')
let nextMonthButton = document.querySelector('div.next')
let monthDiv = document.querySelector('div.month')
let days = Array.from(document.querySelectorAll('div')).slice(11, 46)
let monthArray = [{month: 'JANUARY', days: 31}, {month: 'FEBRUARY', days: 28}, {month: 'MARCH', days: 31}, {month: 'APRIL', days: 30}, {month: 'MAY', days: 31}, {month: 'JUNE', days: 30}, {month: 'JULY', days: 31}, {month: 'AUGUST', days: 31}, {month: 'SEPTEMBER', days: 30}, {month: 'OCTOBER', days: 31}, {month: 'NOVEMBER', days: 30}, {month: 'DECEMBER', days: 31}]

previousMonthButton.addEventListener('click', event => {
    console.log(monthDiv.innerText)
    for(let i = 0; i < monthArray.length; i++){
        if(monthDiv.innerText === monthArray[i].month){
            monthDiv.innerText = monthArray[i - 1].month
        }
    }
})

nextMonthButton.addEventListener('click', event => {
    console.log(event.target)
})