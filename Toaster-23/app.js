let toasterDiv = document.querySelector('.toaster')
toasterDiv.classList.add('collapsed')

let closeButton = document.querySelector('.close-toaster')

closeButton.addEventListener('click', event => {
    toasterDiv.classList.add('collapsed')
})


// let html = document.querySelector('html')
// console.log(html)

// html.addEventListener('blur', event => {
//     console.log(event)
// })

document.addEventListener("mouseleave", (event) => {  
    if (event.clientY <= 0 || event.clientX <= 0 || (event.clientX >= window.innerWidth || event.clientY >= window.innerHeight)) {  
      console.log(event);  
      console.log(toasterDiv.classList.value)
      toasterDiv.classList.remove('collapsed')
    //   if(!toasterDiv.classList.value.includes('collapsed')){
      setTimeout(() => toasterDiv.classList.add('collapsed'), 10000)
    //   }
    }  
  });
