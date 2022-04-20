let passwordInput = document.querySelector('#password')
let lengthField = document.querySelector('#length')
let symbolCheck = document.querySelector('#symbols')
let numbersCheck = document.querySelector('#numbers')
let lowercaseCheck = document.querySelector('#lowercase')
let uppercaseCheck = document.querySelector('#uppercase')
let similarCheck = document.querySelector('#similar')


let keyArray = ['ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnpoqrstuvwxyz', '0123456789', '!?@#$%^&*<>-+=~']
let generatorArray = [...keyArray]

let passwordLength = lengthField.value

console.log(lengthField.value)

passwordInput.value = generator()


function generator(){
    let password = ''
    for(let i = 0; i < passwordLength; i++){
        let chosenString = generatorArray[Math.floor(Math.random() * generatorArray.length)]
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

symbolCheck.addEventListener('change', event => {
    console.log(event.target.checked)
    if(!event.target.checked){
        generatorArray = generatorArray.filter(string => string !== keyArray[3])
        passwordInput.value = generator()
    }else if(!generatorArray.includes(keyArray[3])){
        generatorArray.push(keyArray[3])
        passwordInput.value = generator()
    }
})
//let lowercaseAndNumbers = Math.random().toString(36).slice(2, 7)
