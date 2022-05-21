let choices = document.querySelectorAll('.pick-one')
let playerChoice = ''

choices.forEach(choice => {
    choice.addEventListener('click', event => {
        playerChoice = event.target.attributes.src.value
        localStorage.setItem("playerChoice", playerChoice)
        location.href = './winner.html'
    })
})

