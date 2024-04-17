export function suma(num){
    console.log(num)
    let suma = 0;
    for (let i = 0; i < num.length; i++) {
        let num1 = num[i];
        suma += num1;
    }
    alert(`La suma de todos los numeros es igual a ${suma}`)
}

export function primos(num){
    let primo = 0;
    for (let i = 0; i < num.length; i++) {
        if(num[i] != 1){
            if (num[i] == 2 || num[i] == 3){
                primo++;
            }
            if (num[i] % 2 != 0 && num[i] % 3 != 0 && num[i] % 5 != 0 ){
                primo++;
            }
        }
        else{
            continue
        }  
    }
    alert(`El total de numeros primos es ${primo}`)
}

export function pares(num){
    let par = 0;
    for (let i = 0; i < num.length; i++) {
        if(num[i] % 2 == 0){
            par++;
        }
    }
    alert(`El total de numeros pares es ${par}`)
}

export function prim_prom(num){
    let primo = 0;
    let primos = 0;
    for (let i = 0; i < num.length; i++) {
        if(num[i] != 1){
            if (num[i] == 2 || num[i] == 3){
                primos += num[i];
                primo++;
            }
            if (num[i] % 2 != 0 && num[i] % 3 != 0 && num[i] % 5 != 0 ){
                primos += num[i];
                primo++;
            }
        }
        else{
            continue
        }  
    }
    let prom_p = primos / primo;
    alert(`Elpromedio de primos es ${prom_p}`)
}

export function prim_par(num){
    let par = 0;
    let pares = 0;
    for (let i = 0; i < num.length; i++) {
        if(num[i] % 2 == 0){
            par++;
            pares += num[i];
        }
        console.log(pares)
        console.log(par)
    }
    let prom = pares / par;
    alert(`El promedio de pares es ${prom}`)
}