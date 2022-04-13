
console.log(sampleAPIResponse.items.slice(0,10))
let gallery = document.querySelector('ul.gallery')
gallery.innerHTML = ''

sampleAPIResponse.items.slice(0, 10).forEach(item => {
    console.log(item.snippet.thumbnails.default.url.split('/')[4])
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
    
    a.addEventListener('click',(event) => {
        let iframe = document.querySelector('div.embed iframe')
        let featureh1 = document.querySelector('div.feature h1')
        let featurep = document.querySelector('div.feature p')
        iframe.src = `https://www.youtube.com/embed/${item.snippet.thumbnails.default.url.split('/')[4]}`
        featureh1.innerText = item.snippet.title
        featurep.innerText = item.snippet.description
    })
})
