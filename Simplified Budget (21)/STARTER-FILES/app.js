let incomeInput = document.querySelector('#income')
let expenseNameInput = document.querySelector('#expense-name')
let expenseAmountInput = document.querySelector('#expense-amount')
let addExpenseButton = document.querySelector('#add-expense-button')
let expenseTable = document.querySelector('.expense-table')
let summaryAmounts = document.querySelectorAll('.summary-amount')
let expenseName = ''
let expenseAmount = 0
let expenseTotal = 0
console.log(expenseNameInput, expenseAmountInput)
expenseTable.innerHTML = ''

summaryAmounts.forEach(amount => {
    amount.textContent = ''
})

incomeInput.addEventListener('blur', event => {
    let dollars = event.target.value.split('.')[0]
    let cents = event.target.value.split('.')[1]
    let commaDollars = ''
    let firstDigits = 0

    for(let i = dollars.length - 3; i >= 0; i -= 3){
        if(i === 0){
            commaDollars = dollars.slice(i, firstDigits) + commaDollars
        }else if(i < 4){
            commaDollars = `,${dollars.slice(i, i + 3)}` + commaDollars
            firstDigits = i
            i = 3
        }else{
            commaDollars = `,${dollars.slice(i, i + 3)}` + commaDollars
        }
    }
    console.log(commaDollars)
    summaryAmounts[0].textContent = `$${dollars.includes(',') || dollars.length < 4 ? dollars : commaDollars}.${cents !== undefined ? cents : '00'}`
})

expenseNameInput.addEventListener('change', event => {
    expenseName = event.target.value
})

expenseAmountInput.addEventListener('change', event => {
    expenseAmount = parseFloat(event.target.value)
    expenseTotal = expenseTotal + parseFloat(event.target.value)
    summaryAmounts[1].textContent = `$${expenseTotal}`
})

addExpenseButton.addEventListener('click', event => {
    console.log(expenseName, expenseAmount)
    let nameDiv = document.createElement('div')
    let amountDiv = document.createElement('div')
    let deleteDiv = document.createElement('div')
    let deleteButton = document.createElement('button')
    let deleteImage = document.createElement('img')

    nameDiv.textContent = expenseName
    amountDiv.textContent = `$${expenseAmount}`
    deleteDiv.className = "delete"
    deleteButton.setAttribute('name', "delete-expense")
    deleteButton.className = "delete-expense"
    deleteImage.src = "./images/trash.svg"
    deleteImage.alt = "Tash"

    expenseTable.append(nameDiv)
    expenseTable.append(amountDiv)
    expenseTable.append(deleteDiv)
    deleteDiv.append(deleteButton)
    deleteButton.append(deleteImage)

    deleteButton.addEventListener('click', event => {
        // nameDiv.remove()
        // amountDiv.remove()
        // deleteDiv.remove()
        console.log(parseFloat(amountDiv.textContent.slice(1)))
        expenseTotal = expenseTotal - parseFloat(amountDiv.textContent.slice(1))
        console.log(expenseTotal)
        summaryAmounts[1].textContent = `$${expenseTotal}`

    })
})