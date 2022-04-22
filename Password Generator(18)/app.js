let passwordInput = document.querySelector('#password')
let lengthField = document.querySelector('#length')
let symbolCheck = document.querySelector('#symbols')
let numbersCheck = document.querySelector('#numbers')
let lowercaseCheck = document.querySelector('#lowercase')
let uppercaseCheck = document.querySelector('#uppercase')
let similarCheck = document.querySelector('#similar')


let keyArray = ['ILOABCDEFGHJKMNPQRSTUVWXYZ', 'iloabcdefghjkmnpqrstuvwxyz', '0123456789', '!?@#$%^&*<>-+=~']
let nonSimilarArray = ['ABCDEFGHJKMNPQRSTUVWXYZ', 'abcdefghjkmnpqrstuvwxyz', '23456789', '?@#$%^&*<>-+=~']
let generatorArray = [...keyArray]
console.log(generatorArray)
console.log(keyArray[0].includes('I' || 'i' || 'L' || 'l' || '1' || 'o' || 'O' || '0' || '!'))

let passwordLength = lengthField.value

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

numbersCheck.addEventListener('change', event => {
    if(!event.target.checked){
        generatorArray = generatorArray.filter(string => string !== keyArray[2])
        passwordInput.value = generator()
    }else if(!generatorArray.includes(keyArray[2])){
        generatorArray.push(keyArray[2])
        passwordInput.value = generator()
    }
})

lowercaseCheck.addEventListener('change', event => {
    if(!event.target.checked){
        generatorArray = generatorArray.filter(string => string !== keyArray[1])
        passwordInput.value = generator()
    }else if(!generatorArray.includes(keyArray[1])){
        generatorArray.push(keyArray[1])
        passwordInput.value = generator()
    }
})

uppercaseCheck.addEventListener('change', event => {
    if(!event.target.checked){
        generatorArray = generatorArray.filter(string => string !== keyArray[0])
        passwordInput.value = generator()
    }else if(!generatorArray.includes(keyArray[0])){
        generatorArray.push(keyArray[0])
        passwordInput.value = generator()
    }
})

similarCheck.addEventListener('change', event => {
    console.log(event.target.checked)
    if(!event.target.checked){
        console.log(generatorArray)
        for(let i = 0; i < generatorArray.length; i++){
            if(generatorArray[i][0] === 'I'){
                generatorArray[i] = generatorArray[i].slice(3)
            }else if(generatorArray[i][0] === 'i'){
                generatorArray[i] = generatorArray[i].slice(3)
            }else if(generatorArray[i][0] === '0'){
                generatorArray[i] = generatorArray[i].slice(2)
            }else if(generatorArray[i][0] === '!'){
                generatorArray[i] = generatorArray[i].slice(1)
            }
        }
        passwordInput.value = generator()
    }else{
        for(let i = 0; i < generatorArray.length; i++){
            if(generatorArray[i][generatorArray[i].length -  1] === 'Z'){
                generatorArray[i] = 'ILO' + generatorArray[i]
                console.log(generatorArray[i])
            }else if (generatorArray[i][generatorArray[i].length - 1] === 'z'){
                generatorArray[i] = 'ilo' + generatorArray[i]
                console.log(generatorArray[i])
            }else if (generatorArray[i][generatorArray[i].length - 1] === '9'){
                generatorArray[i] = '01' + generatorArray[i]
                console.log(generatorArray[i])
            }else if (generatorArray[i][generatorArray[i].length - 1] === '~'){
                generatorArray[i] = '!' + generatorArray[i]
                console.log(generatorArray[i])
            }
        }
        passwordInput.value = generator()
    }
})
//let lowercaseAndNumbers = Math.random().toString(36).slice(2, 7)
