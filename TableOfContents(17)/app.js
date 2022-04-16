let contentLinks = document.querySelectorAll('aside div ul li')
console.log(contentLinks)
let contentHeadings = document.querySelectorAll('main h3')
console.log(contentHeadings)

for(let i = 0; i < contentLinks.length; i++){
    contentLinks[i].children[0].href = `#${i}`
    contentLinks[i].addEventListener('click', event => {
        console.log(contentLinks[i].children[0].href)
        for(let i = 0; i < contentLinks.length; i++){
            if(contentLinks[i].classList.value.includes('selected')){
                contentLinks[i].classList.remove('selected')
            }
            if(contentLinks[i].children[0].href === event.target.href){
                contentLinks[i].classList.add('selected')
            }
        }
    })
}

for(let i = 0; i < contentHeadings.length; i++){
    contentHeadings[i].id = i
}