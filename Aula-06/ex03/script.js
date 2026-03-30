function calcular() {
    var txtVelocidade = window.document.getElementById('txtvel')
    var res = window.document.getElementById('resultado')
    var vel = Number(txtVelocidade.value)
    if(vel > 60) {
        res.innerHTML = `<p class="text-danger fw-bold">Sua velocidade ultrapassou o limite da via, MULTADO! </p>`
    } else {
        res.innerHTML =  `<p class="lead"> Sua velocidade atual é de <strong class="fw-bold text-primary">${vel}Km/h</strong> e está dentro do limite de <strong class="text-danger">60Km/h</strong></p>`
    }

}