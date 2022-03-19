const content = [
  {
    'image': 'dave-hoefler-okUIdo6NxGo-unsplash.jpg',
    'caption': 'Photo by Dave Hoefler on Unsplash'
  },
  {
    'image': 'sherman-yang-VBBGigIuaDY-unsplash.jpg',
    'caption': 'Photo by Sherman Yang n Unsplash'
  },
  {
    'image': 'jakob-owens-EwRM05V0VSI-unsplash.jpg',
    'caption': 'Photo by Jakob Owens on Unsplash'
  },
  {
    'image': 'finding-dan-dan-grinwis-O35rT6OytRo-unsplash.jpg',
    'caption': 'Photo by Dan Grinwis on Unsplash'
  },
  {
    'image': 'vincentiu-solomon-ln5drpv_ImI-unsplash.jpg',
    'caption': 'Photo by Vincentiu Solomon on Unsplash'
  },
  {
    'image': 'silas-baisch-Wn4ulyzVoD4-unsplash.jpg',
    'caption': 'Photo by Silas Baisch on Unsplash'
  },
  {
    'image': 'eugene-golovesov-EXdXp7Z4X4w-unsplash.jpg',
    'caption': 'Photo by Eugene Golovesov on Unsplash'
  },
  {
    'image': 'jennifer-reynolds-_8HI5xf4TkE-unsplash.jpg',
    'caption': 'Photo by Jennifer reynolds on Unsplash'
  },
  {
    'image': 'kellen-riggin-SIBOiXKg0Ds-unsplash.jpg',
    'caption': 'Photo by Kellen Riggin on Unsplash'
  },
  {
    'image': 'rafael-hoyos-weht-zhkAp8DGkxw-unsplash.jpg',
    'caption': 'Photo by Rafael Hoyos on Unsplash'
  },
  {
    'image': 'sonya-romanovska-wzdXhyi3AiM-unsplash.jpg',
    'caption': 'Photo by Sonya Romanovska on Unsplash'
  },
]

let imageList = Array.from(document.querySelectorAll('div.thumbnails li img'))
let featuredImage = document.querySelector('div.feature img')
let featuredImageSrc = featuredImage.attributes[0].value
let leftScroll = document.querySelector('a.left')
let rightScroll = document.querySelector('a.right')

imageList.forEach(image => {
  image.addEventListener('click', event => {
    
    let selectedThumbnail = document.querySelector('.selected')
    let clickedLi = event.target.parentNode.parentNode
    let clickedImage = event.target.attributes[0].value
    console.log(clickedImage)

    selectedThumbnail.className = ''
    clickedLi.className = 'selected'
    featuredImageSrc = clickedImage
    featuredImage.attributes[0].value = clickedImage
  })
})

leftScroll.addEventListener('click', event => {
  
  if(featuredImageSrc.charAt(0) === 'i'){
    featuredImageSrc = `./${featuredImageSrc}`
  }
  
  let nextImageSrc = ''
  
  for(let i = 0; i < imageList.length; i++){

    if(featuredImageSrc === imageList[i].attributes[0].value){
      if(!imageList[i - 1]){
        imageList[i].parentNode.parentNode.className = ''
        imageList[imageList.length - 1].parentNode.parentNode.className = 'selected'
        nextImageSrc = imageList[imageList.length - 1].attributes[0].value
      }else{
        imageList[i].parentNode.parentNode.className = ''
        imageList[i - 1].parentNode.parentNode.className = 'selected'
        nextImageSrc = imageList[i - 1].attributes[0].value
        console.log(imageList[i].parentNode.parentNode, imageList[i - 1].parentNode.parentNode)
      }
    }
  }
  featuredImageSrc = nextImageSrc
  featuredImage.attributes[0].value = nextImageSrc
})

rightScroll.addEventListener('click', event => {
  
  if(featuredImageSrc.charAt(0) === 'i'){
    featuredImageSrc = `./${featuredImageSrc}`
  }

  let nextImageSrc = ''
  
  for(let i = 0; i < imageList.length; i++){

    if(featuredImageSrc === imageList[i].attributes[0].value){
      if(!imageList[i + 1]){
        imageList[i].parentNode.parentNode.className = ''
        imageList[0].parentNode.parentNode.className = 'selected'
        nextImageSrc = imageList[0].attributes[0].value
      }else{
        imageList[i].parentNode.parentNode.className = ''
        imageList[i + 1].parentNode.parentNode.className = 'selected'
        nextImageSrc = imageList[i + 1].attributes[0].value
        console.log(imageList[i].parentNode.parentNode, imageList[i + 1].parentNode.parentNode)
      }
    }
  }
  featuredImageSrc = nextImageSrc
  featuredImage.attributes[0].value = nextImageSrc
})