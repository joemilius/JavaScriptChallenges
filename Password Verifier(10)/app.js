let input1 = document.querySelectorAll('input')[0]
let input2 = document.querySelectorAll('input')[1]
let input3 = document.querySelectorAll('input')[2]
let input4 = document.querySelectorAll('input')[3]

let allInputs = document.querySelectorAll('input')

for(let i = 0; i < allInputs.length; i++){
    allInputs[i].addEventListener('keyup', event => {
        console.log(event.target.value)
        if(event.target.value.length > 0){
            allInputs[i + 1].focus()
            
        }
    })
    allInputs[i].addEventListener('paste', event => {
        console.log(event.clipboardData.getData('Text').split(''))
        let data = event.clipboardData.getData('Text').split('')
        for(let j = 0; j < allInputs.length; j++){
            allInputs[j].value = data[j]
        }
    })
}

