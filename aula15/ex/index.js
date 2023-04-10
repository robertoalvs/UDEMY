let numero = Number(prompt('Digite um número'))

let numtitulo = document.getElementById('numero-titulo')
let div = document.getElementById('texto')

numtitulo.innerHTML = numero

texto.innerHTML += `<p> Raiz quadrada: ${numero ** 0.5}  </p>` 
texto.innerHTML += `<p> É NaN: ${Number.isNaN(numero)}  </p>` 
texto.innerHTML += `<p> ${numero} é inteiro: ${Number.isInteger(numero)} </p>` 
texto.innerHTML += `<p> Arredondando para baixo: ${Math.floor(numero)} </p>` 
texto.innerHTML += `<p> Arredondando para Cima: ${Math.ceil(numero)} </p>`
texto.innerHTML += `<p> Com duas casa decimais: ${numero.toFixed(2)} </p>`
