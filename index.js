
function conversor(monto, divisa){
    let resultado = 0;
    let dolar = 380;
    let euro = 374; 
    let real = 36;
    
    switch(divisa){
        case "dolar" : resultado = monto / dolar;
        break;
        case "euro" : resultado = monto /euro;
        break;
        case "real" : resultado = monto / real;
        break;
    }
    return resultado;
}

let monto = parseInt(prompt("ingrese el monto  a convertir")) 
let divisa = prompt("Ingrese la divisa a convertir: dolar, euro, real")
let resultado = conversor(monto, divisa);

if (divisa == "dolar") {
    alert(`usted tiene ${resultado} USD`)
} else if (divisa == "euro") {
    alert(`usted tiene ${resultado} EUR`)
}else if (divisa == "real"){
    alert(`usted tiene ${resultado} $R`)
} else{
    alert(`elija una divisa disponible`)
}
