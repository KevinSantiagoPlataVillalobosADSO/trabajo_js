let cat_pal = parseInt(prompt("INGRESE LA CANTIDAD DE PALABRAS A PROCESAR"));
let pal = [];
for (let i = 0; i < cat_pal; i++) {
    let palabra = prompt("INGRESE LA PALABRA")
    pal[i] = palabra;
}

let pal_mayor = function(...rest){
    console.table(pal.sort())
}
console.log(pal)
pal_mayor(pal);
alert(`Palabra mayor: ${pal[0]}`)
//en teoria deberia funcionar :)