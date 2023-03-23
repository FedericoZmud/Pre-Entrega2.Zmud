

class Divisa {
    constructor(nombre, valor){
        this.nombre = nombre;
        this.valor  = valor;
    }
}
const divisaDolar = new Divisa("dolar",380);
const divisaEuro = new Divisa("euro",375);
const divisaReal = new Divisa("real",36);
const todasLasDivisas = [divisaDolar,divisaEuro,divisaReal]

function conversor(monto, todasLasDivisas){
    let resultado = 0;
    switch(todasLasDivisas){
        case "dolar" :
             resultado = monto / divisaDolar.valor;
        break;
        case "euro" :
             resultado = monto / divisaEuro.valor;
        break;
        case "real" :
             resultado = monto / divisaReal.valor;
        break;
        default : 
            alert("no es posible realizar la operacion");
    }
    return resultado;
}

let monto = parseInt(prompt("ingrese el monto  a convertir")); 
let divisa = prompt("Ingrese la divisa a convertir: dolar, euro, real");
let resultado = conversor(monto, divisa);

if (divisa === "dolar") {
    alert(`usted tiene ${resultado} USD`)
} else if (divisa === "euro") {
    alert(`usted tiene ${resultado} EUR`)
}else if (divisa === "real"){
    alert(`usted tiene ${resultado} $R`)
} else{
    alert("elija una divisa disponible")
}
