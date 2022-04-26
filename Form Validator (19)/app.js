let nameInput = document.querySelector('#name')
let emailInput = document.querySelector('#email')
let passwordInput = document.querySelector('#password')
let confirmPasswordInput = document.querySelector('#confirm-password')
let passwordValue = ''

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
    console.log(value.slice(-4))
    // console.log(value.includes('@yahoo.com'))
    // console.log(value.includes('@comcast.net'))
    if(value.includes('@') & value.slice(-4) === '.com' || value.includes('@') & value.slice(-4) === '.org'|| value.includes('@') & value.slice(-4) === '.net'){
        emailInput.parentElement.children[2].innerHTML = ''
        emailInput.parentElement.children[3].innerHTML = '<img src="./images/success.svg" alt="Success" />'
    }else{
        emailInput.parentElement.children[2].innerHTML = '<img src="./images/error.svg" alt="Error" /> A valid email is required'
        emailInput.parentElement.children[3].innerHTML = ''
    }
})

passwordInput.addEventListener('input', event => {
    if(event.target.value.length >= 8){
        passwordValue = event.target.value
        passwordInput.parentElement.children[2].innerHTML = ''
        passwordInput.parentElement.children[3].innerHTML = '<img src="./images/success.svg" alt="Success" />'
    }else{
        passwordInput.parentElement.children[2].innerHTML = '<img src="./images/error.svg" alt="Error" />'
        passwordInput.parentElement.children[3].innerHTML = ''
    }
})

confirmPasswordInput.addEventListener('input', event => {
    if(event.target.value === passwordValue){
        confirmPasswordInput.parentElement.children[2].innerHTML = ''
        confirmPasswordInput.parentElement.children[3].innerHTML = '<img src="./images/success.svg" alt="Success" />'
    }else{
        confirmPasswordInput.parentElement.children[2].innerHTML = '<img src="./images/error.svg" alt="Error" /> Password does not match'
        confirmPasswordInput.parentElement.children[3].innerHTML = ''
    }
})

