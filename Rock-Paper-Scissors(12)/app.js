let choices = document.querySelectorAll('.pick-one')
let playerChoice = ''

choices.forEach(choice => {
    choice.addEventListener('click', event => {
        console.log(event.target.attributes.src.value)
        playerChoice = event.target.attributes.src.value
        console.log(playerChoice)
        location.href = './winner.html'
    })
})

module.exports = {playerChoice}