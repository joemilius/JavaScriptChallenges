let wrapperDiv = document.querySelector('div.wrapper')
let lastDayOfWeek = document.querySelectorAll('.day-of-week')[6]
let previousMonthButton = document.querySelector('div.previous')
let nextMonthButton = document.querySelector('div.next')
let monthDiv = document.querySelector('div.month')
// let daysDivs = Array.from(document.querySelectorAll('div')).slice(11)
// console.log(daysDivs)
//.slice(11, 46)
let monthArray = [{month: 'JANUARY', days: 31}, {month: 'FEBRUARY', days: 28}, {month: 'MARCH', days: 31}, {month: 'APRIL', days: 30}, {month: 'MAY', days: 31}, {month: 'JUNE', days: 30}, {month: 'JULY', days: 31}, {month: 'AUGUST', days: 31}, {month: 'SEPTEMBER', days: 30}, {month: 'OCTOBER', days: 31}, {month: 'NOVEMBER', days: 30}, {month: 'DECEMBER', days: 31}]


console.log(lastDayOfWeek)

function replaceNextMonthDays(numberOfDays) {
    console.log(numberOfDays)
    let daysDivs = Array.from(document.querySelectorAll('div')).slice(11)
    console.log(daysDivs)
    let emptyDays = 7
    let daysFilled = 1
    

    for(let i = daysDivs.length - 1; i >= 0; i--){
        console.log(daysDivs[i].innerText)
        if(daysDivs[i].innerText !== "" && emptyDays === 7){
            i = -1 
            emptyDays = 0
        }else if(daysDivs[i].innerText !== ""){
            i = -1
        }
        else{
            emptyDays--
        }
    }

    let numberOfSpaces = numberOfDays + emptyDays <= 35 ? 35 : 42
    console.log(numberOfSpaces)

    for(let i = 0; i < daysDivs.length; i++){
            daysDivs[i].remove()
    }

    for(let i = 0; i < numberOfSpaces; i++){
        
        if(emptyDays > 0){
            let newDay = document.createElement('div')
            newDay.innerText = ""
            wrapperDiv.appendChild(newDay)
            emptyDays--
        }else if(numberOfDays >= daysFilled){
            let newDay = document.createElement('div')
            newDay.innerText = daysFilled
            wrapperDiv.appendChild(newDay)
            daysFilled++
        }else {
            let newDay = document.createElement('div')
            newDay.innerText = ""
            wrapperDiv.appendChild(newDay)
        }
    }
}

function replacePreviousMonthDays(numberOfDays) {
    console.log(numberOfDays)
    let daysDivs = Array.from(document.querySelectorAll('div')).slice(11)
    console.log(daysDivs)
    let emptyDays = 7
    let daysFilled = numberOfDays
    

    for(let i = 0; i <= daysDivs.length - 1; i++){
        console.log(daysDivs[i].innerText)
        if(daysDivs[i].innerText !== "" && emptyDays === 7){
            i = daysDivs.length
            emptyDays = 0
        }else if(daysDivs[i].innerText !== ""){
            i = daysDivs.length
        }
        else{
            emptyDays--
        }
    }

    let numberOfSpaces = numberOfDays + emptyDays <= 35 ? 35 : 42
    console.log(numberOfSpaces)

    for(let i = 0; i < daysDivs.length; i++){
            daysDivs[i].remove()
    }

    for(let i = 0; i < numberOfSpaces; i++){
        
        if(emptyDays > 0){
            let newDay = document.createElement('div')
            newDay.innerText = ""
            lastDayOfWeek.insertAdjacentElement('afterend', newDay)
            emptyDays--
        }else if(0 < daysFilled){
            let newDay = document.createElement('div')
            newDay.innerText = daysFilled
            lastDayOfWeek.insertAdjacentElement('afterend', newDay)
            daysFilled--
        }else {
            let newDay = document.createElement('div')
            newDay.innerText = ""
            lastDayOfWeek.insertAdjacentElement('afterend', newDay)
        }
    }
}

previousMonthButton.addEventListener('click', event => {
    console.log(monthDiv.innerText)
    for(let i = 0; i < monthArray.length; i++){
        
        if(monthDiv.innerText === monthArray[i].month){
            if(!monthArray[i - 1]){
                
                monthDiv.innerText = monthArray[monthArray.length - 1].month
                replacePreviousMonthDays(monthArray[monthArray.length - 1].days)
                i = monthArray.length
            }else{
                
                monthDiv.innerText = monthArray[i - 1].month
                replacePreviousMonthDays(monthArray[i - 1].days)
            }
            
        }
    }
})

nextMonthButton.addEventListener('click', event => {

    for(let i = monthArray.length - 1; i >= 0; i--){
        
        if(monthDiv.innerText === monthArray[i].month){
            if(!monthArray[i + 1]){
                monthDiv.innerText = monthArray[0].month
                replaceNextMonthDays(monthArray[0].days)
                i = -1 
            }else{
                monthDiv.innerText = monthArray[i + 1].month
                replaceNextMonthDays(monthArray[i + 1].days)
            } 
        }
    }
    
    // monthArray.reverse().forEach((monthObj, index) => {
    //     console.log(monthDiv.innerText, monthObj.month)
    //     if(monthDiv.innerText === monthObj.month){
    //         console.log(monthDiv.innerText, monthArray[index - 1].month)
    //         monthDiv.innerText = (monthArray[index - 1].month)
    //     }
    // })
})