let nameInput = document.querySelector('#name')
let emailInput = document.querySelector('#email')
let passwordInput = document.querySelector('#password')
let confirmPasswordInput = document.querySelector('#confirm-password')

console.log(nameInput.parentElement.children)
emailInput.parentElement.children[2].innerHTML = '<img src="./images/error.svg" alt="Error" /> A valid email is required'
emailInput.parentElement.children[3].innerHTML = ''

nameInput.addEventListener('input', event => {
    console.log(event.target.value)
    if(event.target.value.length > 0){
        nameInput.parentElement.children[2].innerHTML = ''
        nameInput.parentElement.children[3].innerHTML = '<img src="./images/success.svg" alt="Success" />'
    }else{
        nameInput.parentElement.children[2].innerHTML = '<img src="./images/error.svg" alt="Error" /> A name is required'
        nameInput.parentElement.children[3].innerHTML = ''
    }
})

emailInput.addEventListener('input', event => {
    let value = event.target.value
    console.log(value.includes('@gmail.com'))
    console.log(value.includes('@yahoo.com'))
    console.log(value.includes('@comcast.net'))
    if(value.includes('@gmail.com') || value.includes('@yahoo.com') || value.includes('@comcast.net')){
        emailInput.parentElement.children[2].innerHTML = ''
        emailInput.parentElement.children[3].innerHTML = '<img src="./images/success.svg" alt="Success" />'
    }else{
        emailInput.parentElement.children[2].innerHTML = '<img src="./images/error.svg" alt="Error" /> A valid email is required'
        emailInput.parentElement.children[3].innerHTML = ''
    }
})

