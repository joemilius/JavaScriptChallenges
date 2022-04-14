
let stars = document.querySelectorAll('.star')


console.log(stars)

stars.forEach(star => {
    star.addEventListener('mouseover', (event) => {
        let starDiv = document.querySelector('.star-rating')
        starDiv.classList
        console.log(starDiv.classList[1])

        //Hovered Star Class Value
        console.log(star.classList.value.split(' ')[1])
    })
})