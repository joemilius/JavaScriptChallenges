let overlay = document.querySelector('div.overlay')
let modal = document.querySelector('div.modal')
let closeButton = document.querySelector('button.close')
console.log(closeButton)

// modal.addEventListener('click', event => {
//     console.log(event)
    
// })

closeButton.addEventListener('click', event => {
    console.log(event.target)
    overlay.style.visibility = 'hidden'
    console.log(overlay)
})