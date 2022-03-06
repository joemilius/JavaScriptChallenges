let allKeys = document.querySelectorAll('.key')
//console.log(allKeys[41].attributes[1].value)
//Left Shift button is not taking the jiggle off the class list (classlist is not recognizing it when it it added but it is added)

document.addEventListener('keydown', (event) => {
    
    let newKey = allKeys[Math.floor(Math.random() * allKeys.length)]
    
    let currentToggle = ''
    
    allKeys.forEach((eachKey) => {
        if(event.key.toUpperCase() === eachKey.attributes[1].value.toUpperCase()){
            currentToggle = eachKey
        }
    })
    
    if(currentToggle.classList.value.split(' ').includes('jiggle')){
        currentToggle.classList.remove('jiggle')
        console.log(currentToggle, currentToggle.classList)
        newKey.classList.add('jiggle')
        console.log(newKey, newKey.classList)
    }
})


// For On Click Toggle Keyboard Game
// allKeys.forEach((key) => {
//     //console.log(key.innerText)
//     key.addEventListener('click', (event) => {
//         let classArray = event.target.classList.value.split(' ')
//         console.log(classArray[classArray.length - 1])
//         let newKey= allKeys[Math.floor(Math.random() * allKeys.length)]
//         if(classArray[classArray.length - 1] === 'jiggle'){
//         event.target.classList.remove('jiggle')
//         newKey.classList.add('jiggle')
//         console.log(newKey)
//         }
//     })
// })