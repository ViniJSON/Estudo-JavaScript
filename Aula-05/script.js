var area = document.getElementById('area')  // não é a melhor forma mas é apenas teste

area.addEventListener('click', clicar)
area.addEventListener('mouseenter', entrar)
area.addEventListener('mouseout', sair)

function clicar() {
    area.innerText = 'clicou'
    area.style.background = 'red'
}

function entrar() {
    area.innerText = 'entrou'
}

function sair() {
    area.innerText = 'saiu'
    area.style.background = 'green'
}

function somar() {
    var Tn1 = window.document.getElementById('Tn1')
    var Tn2 = window.document.getElementById('Tn2')
    var resultado = window.document.getElementById('resultado')
    var numA = Number(Tn1.value)
    var numB = Number(Tn2.value)
    var soma = numA + numB
    resultado.innerHTML = `A soma de ${numA} e ${numB} é = ${soma}`
}