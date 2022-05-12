let cardNumberInput = document.querySelector('[name="card-number"]')
let cardHolderInput = document.querySelector('[name="card-holder"]')
let cvvInput = document.querySelector('[name="cvv"]')
let expirationMonthSelect = document.querySelector('[name="expiration-date-month"]')
let expirationYearSelect = document.querySelector('[name="expiration-date-year"]')
let creditCardWrapper = document.querySelector('.credit-card__wrapper')
let cardNumberDivs = document.querySelector('.card-number').children
let cardHolderDivs = document.querySelector('.card-holder').children
console.log(cardNumberDivs)


cardNumberInput.addEventListener('blur', event => {
    console.log(event.target.value)
    let inputValue = event.target.value
    if(inputValue.slice(0,2) === '34' || inputValue.slice(0,2) === '37'){
        creditCardWrapper.classList.remove(creditCardWrapper.classList.value.split(' ')[1])
        creditCardWrapper.classList.add('american')
    }else if(inputValue.slice(0, 1) === '4'){
        creditCardWrapper.classList.remove(creditCardWrapper.classList.value.split(' ')[1])
        creditCardWrapper.classList.add('visa')
    }else if(inputValue.slice(0, 1) === '5'){
        creditCardWrapper.classList.remove(creditCardWrapper.classList.value.split(' ')[1])
        creditCardWrapper.classList.add('mastercard')
    }else if(inputValue.slice(0, 1) === '6'){
        creditCardWrapper.classList.remove(creditCardWrapper.classList.value.split(' ')[1])
        creditCardWrapper.classList.add('discover')
    }

    let inputValueArray = inputValue.split('').filter(char => char !== ' ')

    for(let i = 4; i < inputValueArray.length; i += 5){
        inputValueArray.splice(i, 0, ' ')
    }
    console.log(inputValueArray.join(''))

    cardNumberDivs[0].textContent = inputValueArray.join('')
    cardNumberDivs[1].textContent = inputValueArray.join('')
    
})

cardHolderInput.addEventListener('input', event => {
    console.log(event.target.value)
    cardHolderDivs[0].textContent = event.target.value
    cardHolderDivs[1].textContent = event.target.value
})

cvvInput.addEventListener('focus', event => {
    creditCardWrapper.classList.add('flip')
})

cvvInput.addEventListener('blur', event => {
    creditCardWrapper.classList.remove('flip')
})

cvvInput.addEventListener('input', event => {
    console.log(event.target.value)
})

expirationMonthSelect.addEventListener('change', event => {
    console.log(event.target.value)
})

expirationYearSelect.addEventListener('change', event => {
    console.log(event.target.value)
})