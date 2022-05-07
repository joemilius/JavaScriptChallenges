let cardNumberInput = document.querySelector('[name="card-number"]')
let cardHolderInput = document.querySelector('[name="card-holder"]')
let cvvInput = document.querySelector('[name="cvv"]')
let expirationMonthSelect = document.querySelector('[name="expiration-date-month"]')
let expirationYearSelect = document.querySelector('[name="expiration-date-year"]')

cardNumberInput.addEventListener('input', event => {
    console.log(event.target.value)
})

cardHolderInput.addEventListener('input', event => {
    console.log(event.target.value)
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