let keys = document.querySelectorAll('a')
console.log(keys)
let number = 0
keys.forEach(key => {
    number++
    key.addEventListener('click',(event) =>{
        console.log(event)
        let audio = new Audio(`/audio/key-${number}.mp3`)
        audio.play()
    })
})