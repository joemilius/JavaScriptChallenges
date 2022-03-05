let allKeys = document.querySelectorAll('.key')
//console.log(allKeys[41].attributes[1].value)

document.addEventListener('keydown', (event) => {
    //console.log(allKeys[41].attributes[1].value.toUpperCase(), event.key.toUpperCase())
    let newKey = allKeys[Math.floor(Math.random() * allKeys.length)]
    //console.log(newKey)
    let currentToggle = ''
    
    allKeys.forEach((eachKey) => {
        console.log(eachKey.classList)
        if(event.key.toUpperCase() === eachKey.attributes[1].value.toUpperCase()){
            currentToggle = eachKey
        }
    })
    //console.log(currentToggle.classList.value.split(' '), event.key.toUpperCase())
    if(currentToggle.classList.value.split(' ').includes('jiggle')){
        currentToggle.classList.remove('jiggle')
        newKey.classList.add('jiggle')
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