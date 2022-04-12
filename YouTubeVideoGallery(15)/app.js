
console.log(sampleAPIResponse.items.slice(0,10))
let gallery = document.querySelector('ul.gallery')
gallery.innerHTML = ''

sampleAPIResponse.items.slice(0, 10).forEach(item => {
    let li = document.createElement('li')
    let a = document.createElement('a')
    let img = document.createElement('img')
    let h3 = document.createElement('h3')
    a.className = 'video'
    img.src = item.snippet.thumbnails.default.url
    h3.innerText = item.snippet.title
    gallery.append(li)
    li.append(a)
    a.append(img)
    a.append(h3)
    

})
