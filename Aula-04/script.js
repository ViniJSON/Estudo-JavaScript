var p1 = window.document.getElementsByTagName('p')[1]
var corpo = window.document.body
//var mensagem = window.document.getElementById('msg')  por id

window.document.write('Está escrito assim: ' + p1.innerText)

p1.style.color = 'red'
// document.write(p1.innerHTML)

//mensagem.style.background = 'green'
//mensagem.innerText = ('Estou aguardando...')

/*var mensagem = window.document.getElementsByName('msg')[0] por nome
mensagem.innerText = 'olá' 
*/

// var mensagem = window.document.getElementsByClassName('msg') por classe

var d = window.document.querySelector('div.msg')  // por selector # para Id "." para classes
d.style.background = 'violet'