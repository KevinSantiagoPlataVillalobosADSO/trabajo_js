import {suma, primos, pares, prim_prom, prim_par} from "./modulo2.js";
let cat_num = parseInt(prompt("INGRESE LA CANTIDAD DE NUMEROS A PROCESAR"));
let num = [];
for (let i = 0; i < cat_num; i++) {
    let numero = parseInt(prompt("INGRESE EL NUMERO"))
    if(isNaN(numero)){
        alert("SOLO INGRESE NUMEROS");
        i--;
    }   
    num[i] = numero;
     
}

let oper = parseInt(prompt("INGRESE LA OPERACION A HACER \n 1. Sumar los numeros \n 2. Contar los numeros primos \n 3. Contar los numeros pares \n 4. Promedio de primos \n 5. Promedio de pares \n (Digite el numero de la opción"));
switch (oper) {
    case 1:
        suma(num)
        break;
    case 2:
        primos(num)
        break;
    case 3:
        pares(num)
        break;
    case 4:
        prim_prom(num)
        break;
    case 5:
        prim_par(num)
        break;
    default:
        break;
}