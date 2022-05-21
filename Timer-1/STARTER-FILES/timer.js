let startButton = document.querySelector('.start')
let settingsButton = document.querySelector('.settings')
let ring = document.querySelector('div .ring')
let containerDiv = document.querySelector('div .timer')
let minutes = document.querySelector('.minutes input')
let seconds = document.querySelector('.seconds input')




let currentMinutes = parseInt(minutes.value)
let currentSeconds = parseInt(seconds.value)
// currentMinutes = 0
// currentSeconds = 10
// minutes.setAttribute('value', `0${currentMinutes}`)

let go = false
let show = false

function minutesUp(){
    if(currentMinutes >= 9){
        currentMinutes++
        minutes.setAttribute('value', `${currentMinutes}`)
    }else {
        currentMinutes++
        minutes.setAttribute('value', `0${currentMinutes}`)
    }
}
function minutesDown(){
    if(currentMinutes > 10){
        currentMinutes--
        minutes.setAttribute('value', `${currentMinutes}`)
    }else if(currentMinutes <=10 && currentMinutes > 0){
        currentMinutes--
        minutes.setAttribute('value', `0${currentMinutes}`)
    }
}

function secondsUp(){
    if(currentSeconds === 59){
        currentSeconds = 0
        seconds.setAttribute('value', `0${currentSeconds}`)
    }else if(currentSeconds >= 9){
        currentSeconds++
        seconds.setAttribute('value', `${currentSeconds}`)
    }else if(currentSeconds >= 0){
        currentSeconds++
        seconds.setAttribute('value', `0${currentSeconds}`)
    }
}

function secondsDown(){
    if(currentSeconds === 0){
        currentSeconds = 59
        seconds.setAttribute('value', `${currentSeconds}`)
    }else if(currentSeconds <= 10){
        currentSeconds--
        seconds.setAttribute('value', `0${currentSeconds}`)
    }else {
        currentSeconds--
        seconds.setAttribute('value', `${currentSeconds}`)
    }
}


function countDown() {
        
    if(currentSeconds > 10){
        currentSeconds--
        seconds.setAttribute('value', `${currentSeconds}`)
                  
    } else if(currentSeconds <= 10 && currentSeconds >= 1){
        currentSeconds--
        seconds.setAttribute('value', `0${currentSeconds}`)
                
    }else if(currentSeconds === 0){
        if(currentMinutes > 10){
            currentMinutes--
            minutes.setAttribute('value', `${currentMinutes}`)
            currentSeconds = 59
            seconds.setAttribute('value', `${currentSeconds}`)
        }else if(currentMinutes <= 10 && currentMinutes > 0){
            currentMinutes--
            minutes.setAttribute('value', `0${currentMinutes}`)
            currentSeconds = 59
            seconds.setAttribute('value', `${currentSeconds}`)
        }else if(currentMinutes === 0){
            ring.setAttribute('class', 'ring ending')
            go = false
        }

                
        
    }
    console.log(currentMinutes, currentSeconds)
    setTimeout(() => {
        if(go){
            countDown()
        }
    }, 1000)
        
}


startButton.addEventListener('click', (event) => {
    go = !go
    if(go){
    countDown()
    }
    if(go){
        startButton.innerText = 'stop'
    }else if(!go){
        startButton.innerText = 'start'
    }
})

settingsButton.addEventListener('click', (event) => {
    console.log(settingsButton)
    let minutesButtons = document.createElement('DIV')
    let secondsButtons = document.createElement('DIV')
    let minutesButtonsName = document.createElement('P')
    let secondsButtonsName = document.createElement('P')
    let minutesPlus = document.createElement('BUTTON')
    let minutesMinus = document.createElement('BUTTON')
    let secondsPlus = document.createElement('BUTTON')
    let secondsMinus = document.createElement('BUTTON')

    containerDiv.appendChild(minutesButtons)
    containerDiv.appendChild(secondsButtons)
    minutesButtons.appendChild(minutesButtonsName)
    minutesButtons.appendChild(minutesPlus)
    minutesButtons.appendChild(minutesMinus)
    secondsButtons.appendChild(secondsButtonsName)
    secondsButtons.appendChild(secondsPlus)
    secondsButtons.appendChild(secondsMinus)

    minutesButtonsName.innerText = 'Minutes'
    secondsButtonsName.innerText = 'Seconds'
    minutesPlus.innerText = '+'
    minutesMinus.innerText = '-'
    secondsPlus.innerText = '+'
    secondsMinus.innerText = '-'

    minutesPlus.addEventListener('click', (event) => {
        minutesUp()

    })
    minutesMinus.addEventListener('click', (event) => {
        console.log(event)
        minutesDown()
    })
    secondsPlus.addEventListener('click', (event) => {
        secondsUp()
    })
    secondsMinus.addEventListener('click', (event) => {
        secondsDown()
    })
})
