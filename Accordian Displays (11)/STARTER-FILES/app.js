let questions = document.querySelectorAll('li')

questions.forEach(question => {
    question.addEventListener('click', event => {
    if(question.className === 'expand'){
        question.className = ''
    }else {
        question.className = 'expand'
    }
    })
})