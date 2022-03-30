let overlay = document.querySelector('div.overlay')
let closeButton = document.querySelector('button.close')
let productDot = document.querySelector('circle.dot')

productDot.addEventListener('click', event => {
    overlay.removeAttribute('style')
    console.log(overlay.attributes)   
})

closeButton.addEventListener('click', event => {
    overlay.style.visibility = 'hidden'
    console.log(overlay.attributes)
})