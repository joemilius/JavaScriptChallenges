let nameInput = document.querySelector('#name')
let emailInput = document.querySelector('#email')
let passwordInput = document.querySelector('#password')
let confirmPasswordInput = document.querySelector('#confirm-password')
let passwordButtons = document.querySelectorAll('.show-hide')

let passwordValue = ''

emailInput.parentElement.children[2].innerHTML = '<img src="./images/error.svg" alt="Error" /> A valid email is required'
emailInput.parentElement.children[3].innerHTML = ''

nameInput.addEventListener('input', event => {
    
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
        passwordInput.parentElement.children[3].innerHTML = ''
        passwordInput.parentElement.children[4].innerHTML = '<img src="./images/success.svg" alt="Success" />'
    }else{
        passwordInput.parentElement.children[3].innerHTML = '<img src="./images/error.svg" alt="Error" /> Must be at least 8 characters'
        passwordInput.parentElement.children[4].innerHTML = ''
    }
})

confirmPasswordInput.addEventListener('input', event => {
    if(event.target.value === passwordValue){
        confirmPasswordInput.parentElement.children[3].innerHTML = ''
        confirmPasswordInput.parentElement.children[4].innerHTML = '<img src="./images/success.svg" alt="Success" />'
    }else{
        confirmPasswordInput.parentElement.children[3].innerHTML = '<img src="./images/error.svg" alt="Error" /> Password does not match'
        confirmPasswordInput.parentElement.children[4].innerHTML = ''
    }
})

passwordButtons.forEach(button => {
    button.addEventListener('click', event => {
        event.preventDefault()
        if(event.target.parentElement.classList[1] === 'show'){
            event.target.parentElement.classList.remove('show')
            event.target.parentElement.children[0].type = 'password'
        }else{
            event.target.parentElement.classList.add('show')
            event.target.parentElement.children[0].type = 'text'
        }
    })
})