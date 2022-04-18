let passwordInput = document.querySelector('#password')
let lengthField = document.querySelector('#length')
let symbolCheck = document.querySelector('#symbols')
let numbersCheck = document.querySelector('#numbers')
let lowercaseCheck = document.querySelector('#lowercase')
let uppercaseCheck = document.querySelector('#uppercase')
let similarCheck = document.querySelector('#similar')

let generatorArray = ['ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnpoqrstuvwxyz', '0123456789', '!?@#$%^&*<>-+=~']

console.log(lengthField.value)

passwordInput.value = generator()

function generator(){
    let password = ''
    for(let i = 0; i < lengthField.value; i++){
        let chosenString = generatorArray[Math.floor(Math.random() * generatorArray.length)]
        password += chosenString.charAt(Math.floor(Math.random() * chosenString.length))
    }
    console.log(password)
    return password 
}
