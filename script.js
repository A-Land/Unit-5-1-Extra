document.getElementById('demo').style.textAlign = 'center'
document.getElementById('myh2').style.color = 'blue'
document.getElementById('image').addEventListener('click', myImage)
function myImage () {
  document.getElementById('img').style.display = 'block'
}
const x = document.createElement('IMG')
x.setAttribute('src', 'HW.png')
x.setAttribute('width', '304')
x.setAttribute('height', '228')
x.setAttribute('alt', 'Hello World!')
document.body.appendChild(x)
