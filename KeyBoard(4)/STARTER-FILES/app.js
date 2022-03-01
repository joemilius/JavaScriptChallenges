let allKeys = document.querySelectorAll('.key')
let key1 = allKeys[1]
document.addEventListener('keydown', (event) => {
    console.log(event.key.toUpperCase())
    let newKey = allKeys[Math.floor(Math.random() * allKeys.length)]
    let currentToggle = ''
    allKeys.forEach((eachKey) => {
        if(event.key.toUpperCase() === eachKey.innerText.toUpperCase()){
            currentToggle = eachKey
        }
    })
    console.log(currentToggle.classList.value.split(' ').includes('jiggle'))
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