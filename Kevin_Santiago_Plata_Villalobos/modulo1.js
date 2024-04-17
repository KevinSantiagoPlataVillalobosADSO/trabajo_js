export function visa(num_t) {
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
    console.log("conexion completa");
    let regex2 = /^[3][4-7][0-9]{13}$/;
    if (regex2.test(num_t) == true) {
        alert("TARJETA VALIDA");
    }
    else {
        throw Error;
    }
}

export function dinners(num_t){
    console.log("conexion completa");
    let regex3 = /^[3][6-8][0-9]{12}$/;
    let regex3_3 = /^[3][0][0-5][0-9]{11}$/;
    //no preguntar por los 4 reges :)
    if (regex3.test(num_t) == true || regex3_3.test(num_t) == true) {
        alert("TARJETA VALIDA");
    }
    
    else {
        throw Error;
    }
}

export function discover(num_t){
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
    console.log("conexion completa");
    let regex5 = /^[5][1-5][0-9]{14}$/;
    if (regex5.test(num_t) == true ) {
        alert("TARJETA VALIDA");
    }
    else {
        throw Error;
    }
}