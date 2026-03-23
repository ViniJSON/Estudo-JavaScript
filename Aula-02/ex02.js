/*var num1 = Number.parseInt(window.prompt("Digite um número: "))
var num2 = Number.parseInt(window.prompt("Digite um número: "))

Definindo especificamente para números inteiros
*/

var num1 = Number(window.prompt("Digite um número: "))
var num2 = Number(window.prompt("Digite um número: "))

// com o comando "Number" o Js vai decidir se é int ou float com os valores recebidos

// é possível alterar numero para stirng tbm, com o comando String(num1))ou num1.toString())

var soma = num1 + num2

// window.alert("A soma dos valores é " + soma) uma das formas de fazer

window.alert(`A soma dos valores é ${soma}`) // uma forma mais simples e compacta