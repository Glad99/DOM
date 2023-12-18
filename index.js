const newDiv = document.createElement('div')
const newContent = document.createTextNode('hey, what is up?')
newDiv.appendChild(newContent)
document.body.appendChild(newDiv)

//to create a new button
const button = document.createElement('button')
button.innerText = 'click me 4'
const buttonsDiv = document.getElementById('btn')
buttonsDiv.appendChild(button)












// const first = document.getElementById('main-paragraph')
// const second = document.getElementById('without-style')
// const className = first.getAttribute('class')//get attribute of a particular class
// const className2 = second.getAttribute('class')//getAttibute only work for a particular elements not 
// const button = document.getElementsByTagName('button')[0]//to target the first button with index of 0
// button.style.color = 'white'
// button.style.border = 'none'
// button.style.background = 'skyblue'
// button.style.padding = '10px'
// button.style.borderRadius = '10px'
// // const disableButton = button.setAttribute('disabled', true)
// // const ableButton = button.removeAttribute('disabled')

// const body = document.querySelector('body')
// body.style.background = 'pink'

// console.log(body)
// console.log(className);
// console.log(button);






// let element = document.querySelector('title').innerText //
// let id = document.getElementById('space')
// let div = document.querySelectorAll('h1')
// let div2 = document.querySelector('h1')

// console.log(document);
// console.log(id)
// console.log(div)