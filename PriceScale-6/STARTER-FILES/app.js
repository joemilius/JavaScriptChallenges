let slider = document.querySelector('#priceRange')
let price = document.querySelector('.amount .dollars')

slider.addEventListener('input', (event) => {
    let priceString = event.target.value
    let priceValue = parseInt(event.target.value)

    if(priceValue < 10){
        price.innerText = `0.0${priceString.slice(0, 1)}`
    }else if(priceValue < 100){
        price.innerText = `0.${priceString.slice(0, 2)}` 
    }else if(priceValue < 1000){
        price.innerText = `${priceString.slice(0,  1)}.${priceString.slice(1, 3)}`
    }else if(priceValue < 10000){
        price.innerText = `${priceString.slice(0,  2)}.${priceString.slice(2, 4)}`
    }else if(priceValue >= 10000){
        price.innerText = `${priceString.slice(0, 3)}.${priceString.slice(3, 5)}`
    }
    
})