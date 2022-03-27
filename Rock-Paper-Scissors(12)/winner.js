let playerChoice = localStorage.getItem("playerChoice")
let computerChoices = ['./images/paper.png', './images/rock.png', './images/scissors.png']

let playerPick = document.querySelector('.your-pick img')
playerPick.src = playerChoice

let computerPick = document.querySelector('.computer-pick img')
computerChoice = computerChoices[Math.floor(Math.random() * computerChoices.length)]
computerPick.src = computerChoice

let body = document.querySelector('body')

if(playerChoice === computerChoice){
    body.className = 'winner'
    let tie = document.createElement('h1')
    tie.innerText = "Tie"
    body.prepend(tie)
    document.querySelector('.your-pick h1').remove()
    document.querySelector('.computer-pick h1').remove()
}else if(playerChoice === './images/paper.png' && computerChoice === './images/rock.png'){
    body.className = 'winner you-win'
}else if(playerChoice === './images/rock.png' && computerChoice === './images/scissors.png'){
    body.className = 'winner you-win'
}else if(playerChoice === './images/scissors.png' && computerChoice === './images/paper.png'){
    body.className = 'winner you-win'
}else{
    body.className = 'winner computer-wins'
}

let playAgainButton = document.querySelector('button.play-again')

playAgainButton.addEventListener('click', event => {
    location.href = './index.html'
})