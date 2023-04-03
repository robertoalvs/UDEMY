const nome = 'Roberto'
const sobreNome = 'Alves'
const idade = 42

const peso = 85
const altura = 1.80

let ano = new Date()
let anoHoje = ano.getFullYear()

let resulNascimento = anoHoje - idade

let imc = peso / (altura * altura) // colcoar os parênteses 

console.log(`Meu nome é: ${nome} ${sobreNome} tenho ${idade}, peso ${peso} kilos, tenho ${altura} de altura e nasci em ${resulNascimento} meu IMC é: ${imc}`)

