import {Matematicas} from "./modulo5.js"
for (let i = 0; i < 1; i++) {   
    try {
        let tipo = parseInt(prompt("INGRESE EL TIPO DE OPERACION \n 1. SUMA \n 2. RESTA \n 3. MULTIPLICACION \n 4. DIVISION \n(DIGITE EL NUMERO DE LA OPCION)")) 
        let num1 = parseInt(prompt("INGRESE EL PRIMER NUMERO"));
        let num2 = parseInt(prompt("INGRESE EL SEGUNDO NUMERO"));
        if(isNaN(num1) || isNaN(num2)){
            alert("SOLO INGRESE NUMEROS");
            throw Error;
        }
        switch (tipo) {
            case 1:
                Matematicas.suma(num1, num2);
                break;
            
            case 2:
                Matematicas.resta(num1, num2);
                break;
            
            case 3:
                Matematicas.multiplicacion(num1, num2);
                break;

            case 4:
                Matematicas.division(num1, num2);
                break;
            default:
                alert("OPERACION NO VALIDA, SELECCIONE DE NUEVO")
                i--;
                break;
        }   
    } 
    catch (error) {
        alert("algo fallo, Ingrese solo numeros");
        console.log(i)
        i--;
    }
}