export function visa(num_t) {
    if(num_t < 0 && num_t > 16 && isNaN(num_t)){
        alert("SOLO NUMEROS positivos")
        throw Error;
    } 
    else if(!Number.isInteger(num_t)){
        alert("SOLO ENTEROS")
        throw Error;
    }
    console.log("conexion completa");
    let regex = /^[4][0-9]{15}$/;
    if (regex.test(num_t) == true) {
        alert("TARJETA VALIDA");
    }
    else {
        throw Error;
    }
}

export function american(num_t){
    if(num_t < 0 && num_t > 16 && isNaN(num_t)){
        alert("SOLO NUMEROS positivos")
        throw Error;
    } 
    else if(!Number.isInteger(num_t)){
        alert("SOLO ENTEROS")
        throw Error;
    }
    console.log("conexion completa");
    let regex2 = /^[34][0-9]{14}$/;
    let regex2_1 = /^[37][0-9]{14}$/;
    if (regex2.test(num_t) == true || regex2_1.test(num_t) == true) {
        alert("TARJETA VALIDA");
    }
    else {
        throw Error;
    }
}

export function dinners(num_t){
    if(num_t < 0 && num_t > 16 && isNaN(num_t)){
        alert("SOLO NUMEROS POSITIVOS")
        throw Error;
    } 
    else if(!Number.isInteger(num_t)){
        alert("SOLO NUMEROS ")
        throw Error;
    }
    console.log("conexion completa");
    let regex3 = /^[3][6][0-9]{12}$/;
    let regex3_1 = /^[3][8][0-9]{12}$/;
    let regex3_2 = /^[3][0][0][0-9]{11}$/;
    let regex3_3 = /^[3][0][5][0-9]{11}$/;
    //no preguntar por los 4 reges :)
    if (regex3.test(num_t) == true || regex3_1.test(num_t) == true || regex3_2.test(num_t) == true || regex3_3.test(num_t) == true) {
        alert("TARJETA VALIDA");
    }
    else {
        throw Error;
    }
}

export function discover(num_t){
    if(num_t < 0 && num_t > 16 && isNaN(num_t)){
        alert("SOLO NUMEROS positivos")
        throw Error;
    } 
    else if(!Number.isInteger(num_t)){
        alert("SOLO ENTEROS")
        throw Error;
    }
    console.log("conexion completa");
    let regex4 = /^[6][0][1][1][0-9]{12}$/;
    if (regex4.test(num_t) == true) {
        alert("TARJETA VALIDA");
    }
    else {
        throw Error;
    }
}

export function master(num_t){
    if(num_t < 0 && num_t > 16 && isNaN(num_t)){
        alert("SOLO NUMEROS positivos")
        throw Error;
    } 
    else if(!Number.isInteger(num_t)){
        alert("SOLO ENTEROS")
        throw Error;
    }
    console.log("conexion completa");
    let regex5 = /^[5][1][0-9]{14}$/;
    let regex5_1 = /^[5][5][0-9]{14}$/;
    if (regex5.test(num_t) == true || regex5_1.test(num_t) == true) {
        alert("TARJETA VALIDA");
    }
    else {
        throw Error;
    }
}