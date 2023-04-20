

function meuEscopo () {

    const form = document.querySelector('.form') // seleciona o formulário
    let res = document.querySelector('#res')

   /* form.onsubmit = function (evento) {   // onsubmit - captura o botão envio

        evento.preventDefault()  // Previne o que deve acontecer por padrão, não envia o form

        alert(1)
        console.log('Foi enviado')

    } */



    // RECURSO MAIS MODERNO 

    /* let contador = 1

    function recebeEventoForm (evento) {

        evento.preventDefault()
        console.log(`Form não foi enviado ${contador}`)
        contador++

    } */

    const pessoas = [] // ARRAY

    function recebeEventoForm (evento) {

        evento.preventDefault()
        const nome = form.querySelector('.nome')
        const sobrenome = form.querySelector('.sobrenome')
        const peso = form.querySelector('.peso')
        const altura = form.querySelector('.altura')

        pessoas.push ({ // adciona elementos no ARRAY

            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        });

        console.log(pessoas)

        res.innerHTML += `<p> Nome: ${nome.value} <br> Sobrenome: ${sobrenome.value} <br> Peso: ${peso.value}KG  <br> Altura: ${altura.value}M </p>`
    }

    

    form.addEventListener('submit', recebeEventoForm) // Adiciona um evento de submit em uma função que no caso aqui é: recebeEventoForm
}
meuEscopo ()  // Executa a função - não pode esquecer