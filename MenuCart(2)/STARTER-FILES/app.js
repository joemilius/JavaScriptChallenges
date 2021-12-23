const menuItems = [
    {
        name: 'French Fries with Ketchup',
        price: 223,
        image: 'plate__french-fries.png',
        alt: 'French Fries',
        count: 0
    },
    {
        name: 'Salmon and Vegetables',
        price: 512,
        image: 'plate__salmon-vegetables.png',
        alt: 'Salmon and Vegetables',
        count: 0
    },
    {
        name: 'Spaghetti Meat Sauce',
        price: 782,
        image: 'plate__spaghetti-meat-sauce.png',
        alt: 'Spaghetti with Meat Sauce',
        count: 0
    },
    {
        name: 'Bacon, Eggs, and Toast',
        price: 599,
        image: 'plate__bacon-eggs.png',
        alt: 'Bacon, Eggs, and Toast',
        count: 0
    },
    {
        name: 'Chicken Salad with Parmesan',
        price: 698,
        image: 'plate__chicken-salad.png',
        alt: 'Chicken Salad with Parmesan',
        count: 0
    },
    {
        name: 'Fish Sticks and Fries',
        price: 634,
        image: 'plate__fish-sticks-fries.png',
        alt: 'Fish Sticks and Fries',
        count: 0
    }
]

//Cart Item Construction
let newItemContainer = document.createElement('LI')
let plate = document.createElement('DIV')
let quantity1 = document.createElement('DIV')
let quantity2 = document.createElement('DIV')
let content = document.createElement('DIV')
let quantityWrapper = document.createElement('DIV')
let subTotal = document.createElement('DIV')
let menuItem = document.createElement('P')
let price = document.createElement('P')
let decreaseButton = document.createElement('BUTTON')
let increaseButton = document.createElement('BUTTON')
plate.setAttribute('class', 'plate')
quantity1.setAttribute('class', 'quantity')
content.setAttribute('class', 'content')


//Menu Button
let addToCartButton = document.querySelectorAll('button.add')
console.log(addToCartButton)

let checkMark = document.createElement('IMG')
checkMark.setAttribute('src', 'images/check.svg')
checkMark.setAttribute('alt', 'Check')



//Menu Button Action
let buttonFunction = addToCartButton.forEach((eachButton) => {
    
    eachButton.addEventListener('click', (event) => {
        
        // let checkMark = document.createElement('img')
        // checkMark.setAttribute('src', 'images/check.svg')
        // checkMark.setAttribute('alt', 'Check')
        eachButton.appendChild(checkMark)
        eachButton.setAttribute('class', 'in-cart')
        eachButton.innerText = 'In Cart'

        



    })
})

let inCartButton = document.querySelectorAll('button.in-cart')

