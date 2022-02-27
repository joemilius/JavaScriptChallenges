let allKeys = document.querySelectorAll('.key')

allKeys.forEach((key) => {
    key.addEventListener('click', (event) => {
        let classArray = event.target.classList.value.split(' ')
        console.log(classArray[classArray.length - 1])
        let newKey= allKeys[Math.floor(Math.random() * allKeys.length)]
        if(classArray[classArray.length - 1] === 'jiggle'){
        event.target.classList.remove('jiggle')
        newKey.classList.add('jiggle')
        console.log(newKey)
        }
    })
})