let keys = document.querySelectorAll('path')
let number = 0
keys.forEach(key => {
    number++
    key.id = number
    
    key.addEventListener('click',(event) =>{
        console.log(event.target.id)
        let audio = new Audio(`audio/key-${event.target.id}.mp3`)
        audio.play()
    })
})
