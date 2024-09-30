export default function mainImageContainer(productName){
const container = document.getElementById('mainImgContainer')
container.className ='mainImgContainer'

const h1 = document.createElement('h1')
h1.classList = 'mainImgContainer__h1'
h1.innerText =`new year, new “you” with ${productName}`

const button = document.createElement('button')
button.classList = 'mainImgContainer__tryMeBtn'
button.innerText = `try ${productName}`

container.appendChild(h1)
container.appendChild(button)




}