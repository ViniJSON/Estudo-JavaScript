function verificaNacionalidade() {
    var nacionalidade = window.document.getElementById('txtPais')
    var resultNacionalidade = String(nacionalidade.value)
    var result = window.document.getElementById('resultadoNacionalidade')
    if (resultNacionalidade == 'Brasil'){
        result.innerHTML = `<p class="lead"> Você nasceu no ${resultNacionalidade}, então é <span class="fw-bold text-primary"> brasileiro</span></p>`
    } else {
        result.innerHTML = `<p class="lead"> Você nasceu no ${resultNacionalidade}, então é <span class="fw-bold text-primary"> estrangeiro</span></p>`
    }
}