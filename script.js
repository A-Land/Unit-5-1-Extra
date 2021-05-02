document.getElementById('demo').style.textAlign = 'center'
document.getElementById('myh2').style.color = 'blue'
function myFunction () {
  const x = document.createElement('IMG')
  x.setAttribute('src', 'HW.png')
  x.setAttribute('width', '304')
  x.setAttribute('height', '228')
  x.setAttribute('alt', 'Hello World!')
  document.body.appendChild(x)
}
