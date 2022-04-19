let passwordInput = document.querySelector('#password')
let lengthField = document.querySelector('#length')
let symbolCheck = document.querySelector('#symbols')
let numbersCheck = document.querySelector('#numbers')
let lowercaseCheck = document.querySelector('#lowercase')
let uppercaseCheck = document.querySelector('#uppercase')
let similarCheck = document.querySelector('#similar')


let keyArray = ['ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnpoqrstuvwxyz', '0123456789', '!?@#$%^&*<>-+=~']
let generatorArray = []

let passwordLength = lengthField.value

console.log(lengthField.value)

passwordInput.value = generator()


function generator(){
    let password = ''
    for(let i = 0; i < passwordLength; i++){
        let chosenString = keyArray[Math.floor(Math.random() * generatorArray.length)]
        console.log(chosenString)
        password += chosenString.charAt(Math.floor(Math.random() * chosenString.length))
    }
    console.log(password)
    return password 
}

lengthField.addEventListener('input',event => {
    passwordLength = event.target.value
    let lengthText = document.querySelector('#lengthText')
    lengthText.innerText = event.target.value
    passwordInput.value = generator()
})
//let lowercaseAndNumbers = Math.random().toString(36).slice(2, 7)
