let incomeInput = document.querySelector('#income')
let expenseNameInput = document.querySelector('#expense-name')
let expenseAmountInput = document.querySelector('#expense-amount')
let addExpenseButton = document.querySelector('#add-expense-button')
let expenseTable = document.querySelector('.expense-table')
let summaryAmounts = document.querySelectorAll('.summary-amount')
let incomeTotal = 0
let expenseName = ''
let expenseAmount = 0
let expenseTotal = 0
console.log(expenseNameInput, expenseAmountInput)
expenseTable.innerHTML = ''

summaryAmounts.forEach(amount => {
    amount.textContent = ''
})

incomeInput.addEventListener('blur', event => {
    let noCommaIncome = event.target.value.split('').filter(char => char !== ',').join('')
    incomeTotal = incomeTotal + parseFloat(noCommaIncome)
    let incomeTotalString = incomeTotal.toString().split('').includes('.') ? incomeTotal.toString() : incomeTotal.toString() + '.00'
    let dollars = incomeTotalString.split('.')[0]
    let cents = incomeTotalString.split('.')[1]
    
    if(cents.length === 1){
        cents = cents + '0'
    }else if(cents.length > 2){
        cents = cents.slice(0,2)
    }
    
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
    summaryAmounts[0].textContent = `$${dollars.includes(',') || dollars.length < 4 ? dollars : commaDollars}.${cents !== undefined ? cents : '00'}`
    incomeInput.value = ''
})

expenseNameInput.addEventListener('change', event => {
    expenseName = event.target.value
})

expenseAmountInput.addEventListener('change', event => {
    expenseAmount = parseFloat(event.target.value)
    expenseTotal = expenseTotal + parseFloat(event.target.value)
    
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

    summaryAmounts[1].textContent = `$${expenseTotal}`
    summaryAmounts[2].textContent = `$${incomeTotal - expenseTotal}`

    deleteButton.addEventListener('click', event => {
        nameDiv.remove()
        amountDiv.remove()
        deleteDiv.remove()
        
        expenseTotal = expenseTotal - parseFloat(amountDiv.textContent.slice(1))
        summaryAmounts[1].textContent = `$${expenseTotal}`
        summaryAmounts[2].textContent = `$${incomeTotal - expenseTotal}`
    })

    expenseNameInput.value = ''
    expenseAmountInput.value = ''
})