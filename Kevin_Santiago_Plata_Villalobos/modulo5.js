export class Matematicas {
    static suma (num1, num2){
        let suma = num1 + num2
        alert(suma)
    }
    static resta (num1, num2){
        let rest = num1 - num2
        alert(rest) 
    }
    static division (num1, num2){
        if(num1 == 0 || num2 == 0){
            alert("NO SE PUEDE DIVIDIR ENTRE 0")
            throw Error;
        }
        else{
            let div = num1 / num2
            alert(div)
        } 
    }
    static multiplicacion (num1, num2){
        let mult = num1 * num2
        alert(mult) 
    }
}

