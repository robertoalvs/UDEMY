/* const pessoa1 =  {

    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 25
};

console.log(pessoa1.nome)
console.log(pessoa1.sobrenome)
console.log(pessoa1.idade) */


/* function criaPessoa (nome, sobrenome, idade) { //  <= Parametro 

    return { // <= Objeto

        nome: nome,
        sobrenome: sobrenome,
        idade: idade,

    };
} 

let pessoa1 = criaPessoa ('Luiz', 'Miranda', 25)
let pessoa2 = criaPessoa ('Wagner', 'Alves', 25)
let pessoa3 = criaPessoa ('Luiz', 'Miranda', 25)
let pessoa4 = criaPessoa ('Luiz', 'Miranda', 25)
let pessoa5 = criaPessoa ('Luiz', 'Miranda', 25)

console.log(pessoa1.nome, pessoa2.sobrenome, pessoa1.idade) */


/* function criaPessoa (nome, sobrenome, idade) { //  <= Parametro 

    return { // <= Objeto

        nome, sobrenome, idade };
} 

let pessoa1 = criaPessoa ('Luiz', 'Miranda', 25)
let pessoa2 = criaPessoa ('Wagner', 'Alves', 25)
let pessoa3 = criaPessoa ('Luiz', 'Miranda', 25)
let pessoa4 = criaPessoa ('Luiz', 'Miranda', 25)
let pessoa5 = criaPessoa ('Luiz', 'Miranda', 25)

console.log(pessoa1.nome, pessoa2.sobrenome, pessoa1.idade) */


const pessoa1 = {

    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 25,

    fala () { // função sem fuction

        console.log(`A minha idade é: ${this.idade}`)


    },

    incrementaIdade () {

        this.idade++
    }
}

pessoa1.fala()
pessoa1.incrementaIdade()