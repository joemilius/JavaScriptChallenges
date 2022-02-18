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


let checkMark = document.createElement('IMG')
checkMark.setAttribute('src', 'images/check.svg')
checkMark.setAttribute('alt', 'Check')

let cartSubtotalElem = document.querySelector('.amount.price.subtotal')
let cartTaxElem = document.querySelector('.amount.price.tax')
let cartTotalElem = document.querySelector('.amount.price.total')
let cartSubtotalAmount = parseFloat(cartSubtotalElem.innerText.substring(1))
let cartTaxAmount = parseFloat(cartTaxElem.innerText.substring(1))
let cartTotalAmount = parseFloat(cartTotalElem.innerText.substring(1))
console.log(cartTotalAmount)



//Menu Button Action
let buttonFunction = addToCartButton.forEach((eachButton) => {
    
    eachButton.addEventListener('click', (event) => {
        
        //Changes the Add to Cart Button
        eachButton.setAttribute('class', 'in-cart')
        eachButton.innerHTML = ` 
        <img src="images/check.svg" alt="Check" />
        In Cart`
        
        //Values of Menu Item
        let dishName = event.target.parentNode.childNodes[1].innerText
        let dishCost = event.target.parentNode.childNodes[3].innerText
        let dishImage = event.target.parentNode.parentNode.childNodes[1].childNodes[1].src
        let quantityValue = 1
        //Cart Item Construction
        let cartContainer = document.querySelector('.cart-summary')
        let newItemContainer = document.createElement('LI')
        let plate = document.createElement('DIV')
        let plateImage = document.createElement('img')
        let quantity1 = document.createElement('DIV')
        let content = document.createElement('DIV')
        let menuItem = document.createElement('P')
        let price = document.createElement('P')
        let quantityWrapper = document.createElement('DIV')
        let decreaseButton = document.createElement('BUTTON')
        let decreaseImage = document.createElement('img')
        let quantity2 = document.createElement('DIV')
        let increaseButton = document.createElement('BUTTON')
        let increaseImage = document.createElement('img')
        let subtotal = document.createElement('DIV')
        plate.setAttribute('class', 'plate')
        plateImage.setAttribute('src', `${dishImage}`)
        plateImage.setAttribute('alt', "Fish Sticks and Fries")
        plateImage.setAttribute('class', 'plate')
        quantity1.setAttribute('class', 'quantity')
        content.setAttribute('class', 'content')
        menuItem.setAttribute('class', 'menu-item')
        price.setAttribute('class', 'price')
        quantityWrapper.setAttribute('class', 'quantity__wrapper')
        decreaseButton.setAttribute('class', 'decrease')
        quantity2.setAttribute('class', 'quantity')
        increaseButton.setAttribute('class', 'increase')
        increaseImage.setAttribute('src', "images/chevron.svg")
        decreaseImage.setAttribute('src', "images/chevron.svg")
        subtotal.setAttribute('class', 'subtotal')

        //Sets Values For Cart Item to Corresponding Menu Item
        menuItem.innerHTML = dishName
        price.innerText = dishCost
        quantity1.innerText = quantityValue
        quantity2.innerText = quantityValue
        console.log(dishCost.substring(1))
        subtotal.innerText = `$${parseFloat(dishCost.substring(1)) * quantityValue}`

        //Adds Cart Item
        cartContainer.appendChild(newItemContainer)
        newItemContainer.appendChild(plate)
        newItemContainer.appendChild(content)
        newItemContainer.appendChild(quantityWrapper)
        newItemContainer.appendChild(subtotal)
        plate.appendChild(plateImage)
        plate.appendChild(quantity1)
        content.appendChild(menuItem)
        content.appendChild(price)
        quantityWrapper.appendChild(decreaseButton)
        quantityWrapper.appendChild(quantity2)
        quantityWrapper.appendChild(increaseButton)
        decreaseButton.appendChild(decreaseImage)
        increaseButton.appendChild(increaseImage)
        cartSubtotalAmount += parseFloat(dishCost.substring(1))
        cartSubtotalElem.innerText = `$${cartSubtotalAmount.toString().slice(0,5)}`
        cartTaxAmount += parseFloat(dishCost.substring(1)) * 0.0975
        cartTaxElem.innerText = `$${cartTaxAmount.toString().slice(0,4)}`
        cartTotalAmount = cartSubtotalAmount + cartTaxAmount
        console.log(cartTotalAmount)
        cartTotalElem.innerText = `$${cartTotalAmount.toString().slice(0,5)}`

        // Decrease quantity button
        decreaseButton.addEventListener('click', (event) => {
            quantityValue--
            cartSubtotalAmount -= parseFloat(dishCost.substring(1))
            cartTaxAmount -= parseFloat(dishCost.substring(1)) * 0.0975
            cartTotalAmount = cartSubtotalAmount + cartTaxAmount
            //subtotalAmount = parseFloat(dishCost.substring(1)) * quantityValue
            quantity1.innerText = quantityValue
            quantity2.innerText = quantityValue
            subtotal.innerText = `$${parseFloat(dishCost.substring(1)) * quantityValue}`
            cartSubtotalElem.innerText = `$${cartSubtotalAmount.toString().slice(0,5)}`
            cartTaxElem.innerText = `$${cartTaxAmount.toString().slice(0,4)}`
            cartTotalElem.innerText = `$${cartTotalAmount.toString().slice(0,5)}`
        })

        // Increase quantity button
        increaseButton.addEventListener('click', (event) => {
                //console.log(event.target.parentNode.previousSibling)
            // let quantityAmount = parseInt(event.target.parentNode.previousSibling.innerText)
            // let subtotalAmount = parseFloat(event.target.parentNode.parentNode.nextSibling.innerText.substring(1))
            // let firstQuantityElem = event.target.parentNode.parentNode.parentNode.childNodes[0].childNodes[1]
            // let secondQuantityElem = event.target.parentNode.previousSibling
            // let subtotalElem = event.target.parentNode.parentNode.nextSibling
            quantityValue++
            cartSubtotalAmount += parseFloat(dishCost.substring(1))
            cartTaxAmount += parseFloat(dishCost.substring(1)) * 0.0975
            cartTotalAmount = cartSubtotalAmount + cartTaxAmount
            //subtotalAmount = parseFloat(dishCost.substring(1)) * quantityValue
            quantity1.innerText = quantityValue
            quantity2.innerText = quantityValue
            subtotal.innerText = `$${parseFloat(dishCost.substring(1)) * quantityValue}`
            cartSubtotalElem.innerText = `$${cartSubtotalAmount.toString().slice(0,5)}`
            cartTaxElem.innerText = `$${cartTaxAmount.toString().slice(0,4)}`
            cartTotalElem.innerText = `$${cartTotalAmount.toString().slice(0,5)}`
            //cartTotalElem.innerText = `$${cartTotalAmount}`
            
        })

    

    })
})

let inCartButton = document.querySelectorAll('button.in-cart')

