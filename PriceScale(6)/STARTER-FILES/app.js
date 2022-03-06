let slider = document.querySelector('#priceRange')
let price = document.querySelector('.amount .dollars')

slider.addEventListener('input', (event) => {
    let priceString = event.target.value
    let priceValue = parseInt(event.target.value)
    let dollars = priceString.slice(0, 2)
    let cents = priceString.slice(2, 4)
    if(priceValue === 0){
    price.innerText = `0.00`
    }else if(priceValue < 1000){
        price.innerText
    }
    
})