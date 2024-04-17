let cat_num = parseInt(prompt("INGRESE LA CANTIDAD DE NUMEROS A PROCESAR"));
let num = [];
for (let i = 0; i < cat_num; i++) {
    let numero = parseInt(prompt("INGRESE EL NUMERO"))
    num[i] = numero;
}

let num_mayor = function(...num){
    return num.sort(function(a,b) {
        return b - a;
    });
}

let orden = num_mayor(...num);
console.table(orden);


// let arrayNumbers = [];
// let nuevo_a = [];
// let cat_num = parseInt(prompt("INGRESE LA CANTIDAD DE NUMEROS A PROCESAR"));

// for (let i = 0; i < cat_num; i++) {
//     let numero = parseInt(prompt("INGRESE EL NUMERO"))
//     arrayNumbers[i] = numero;
// }

// for (let i = 0; i < arrayNumbers.length; i++) {
//     ns = i + 1;
//     console.log(arrayNumbers[i])
//     console.log(arrayNumbers[ns]);
// }