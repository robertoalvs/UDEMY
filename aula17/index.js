

/* function saudacao(nome) {

    
    return `Bom dia ${nome}`

}


let func = saudacao('Roberto')
console.log(func) */

/* function soma(x = 1, y =2) {

    let res = x + y

    return res
}

let res = soma()
console.log(res) */



///////////////////////////////////////////////////////////////////////

/* let raiz = function (n) {

return n ** 0.5

};

console.log(raiz(16)) */


/* let raiz = n => n** 0.5 // A funçaõ em cima está simplificada, nesse codigo, ARROW

console.log(raiz(25)) */


function distance(x1, y1, x2, y2) {

    let dx = x2 - x1
    let dy = y2 - y1
    return Math.sqrt(dx*dx + dy*dy)
}   