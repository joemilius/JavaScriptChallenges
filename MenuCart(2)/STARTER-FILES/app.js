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


//Menu Button
let addToCartButton = document.querySelectorAll('button.add')
console.log(addToCartButton)

let checkMark = document.createElement('IMG')
checkMark.setAttribute('src', 'images/check.svg')
checkMark.setAttribute('alt', 'Check')



//Menu Button Action
let buttonFunction = addToCartButton.forEach((eachButton) => {
    
    eachButton.addEventListener('click', (event) => {
        console.log(event)

        //Changes the Add to Cart Button
        eachButton.setAttribute('class', 'in-cart')
        eachButton.innerHTML = ` 
            <img src="images/check.svg" alt="Check" />
            In Cart`

        //Cart Item Construction
        let cartContainer = document.querySelector('.cart-summary')
        let newItemContainer = document.createElement('LI')
        let plate = document.createElement('DIV')
        let plateImage = document.createElement('img')
        let quantity = document.createElement('DIV')
        let content = document.createElement('DIV')
        let menuItem = document.createElement('P')
        let price = document.createElement('P')
        let quantityWrapper = document.createElement('DIV')
        let decreaseButton = document.createElement('BUTTON')
        let decreaseImage = document.createElement('img')
        let increaseButton = document.createElement('BUTTON')
        let increaseImage = document.createElement('img')
        let subTotal = document.createElement('DIV')
        plate.setAttribute('class', 'plate')
        quantity.setAttribute('class', 'quantity')
        content.setAttribute('class', 'content')
        menuItem.setAttribute('class', 'menu-item')
        price.setAttribute('class', 'price')
        quantityWrapper.setAttribute('class', 'quantity__wrapper')
        decreaseButton.setAttribute('class', 'decrease')
        increaseButton.setAttribute('class', 'increase')
        subTotal.setAttribute('class', 'subtotal')

        //Adds Cart Item
        cartContainer.appendChild(newItemContainer)
        newItemContainer.appendChild(plate)
        newItemContainer.appendChild(content)
        newItemContainer.appendChild(quantityWrapper)
        newItemContainer.appendChild(subtotal)
        plate.appendChild(plateImage)
        plate.appendChild(quantity)
        content.appendChild(menuItem)
        content.appendChild(price)
        quantityWrapper.appendChild(decreaseButton)
        quantityWrapper.appendChild(increaseButton)
        decreaseButton.appendChild(decreaseImage)
        increaseButton.appendChild(increaseImage)


    

    })
})

let inCartButton = document.querySelectorAll('button.in-cart')

