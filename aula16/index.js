let nome = ['Luiz',  'Maria', 'Roberto']

nome[0] = 'Eduardo' // troca o Eduardo pelo Luiz no indice 0
nome[2] = 'luiza' // troca o Roberto pela Luiza no indice 2
nome.unshift('Marcos') // // Adiciona o Marcos no começo do Array 
nome.push('Douglas') // Adiciona o Douglas no final do Array 
nome.push('Pedro') // Adiciona o Pedro no final do Array 
let removido = nome.pop() // Remove o último elemento do Array, no caso foi o Pedro
let removido1 = nome.shift() // // Remove o primeiro elemento do Array, no caso foi o Marcos

delete nome[1] // Apaga o elemento do indice 1, porém o indice fica vazio.
nome.length // mostra o tamanho do Array


console.log(`${removido}`)
console.log(`${removido1}`)
console.log(nome)
console.log(`${nome.length}`)