let stars = document.querySelectorAll('.star svg path')

stars.forEach(star => {
    star.addEventListener('mouseover', (event) => {
        let starDiv = document.querySelector('.star-rating')
        starDiv.classList.remove(starDiv.classList[1])
        starDiv.classList.add(star.parentNode.parentNode.classList.value.split(' ')[1])
        console.log(starDiv.classList)

        //Hovered a tag Star Class Value
        console.log(star.parentNode.parentNode.classList)
    })
})