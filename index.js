class Moneda {
    constructor(nombre, tasaCambio) {
      this.nombre = nombre;
      this.tasaCambio = tasaCambio;
    }
  }
  
  let monedas = [];
  
  if (localStorage.getItem("monedas")) {

    const monedasGuardadas = JSON.parse(localStorage.getItem("monedas"));
    monedas = monedasGuardadas.map(moneda => new Moneda(moneda.nombre, moneda.tasaCambio));
  } else {
    
    const euro = new Moneda("Euro", 1);
    const dolar = new Moneda("Dólar", 1.18);
    const libra = new Moneda("Libra esterlina", 0.86);
    monedas = [euro, dolar, libra];
    localStorage.setItem("monedas", JSON.stringify(monedas));
  }
  
 
  const selectDivisaOrigen = document.getElementById("divisaOrigen");
  const selectDivisaDestino = document.getElementById("divisaDestino");
  const inputCantidad = document.getElementById("cantidad");
  const divResultado = document.getElementById("resultado");
  

  monedas.forEach((moneda, index) => {
    const option = document.createElement("option");
    option.value = index;
    option.text = moneda.nombre;
    selectDivisaOrigen.add(option);
  
    const option2 = document.createElement("option");
    option2.value = index;
    option2.text = moneda.nombre;
    selectDivisaDestino.add(option2);
  });
  
  function convertirDivisas() {
    const divisaOrigen = monedas[selectDivisaOrigen.value];
    const divisaDestino = monedas[selectDivisaDestino.value];
    const cantidad = inputCantidad.value;
    const cantidadConvertida = cantidad / divisaOrigen.tasaCambio * divisaDestino.tasaCambio;
    divResultado.innerHTML = `${cantidad} ${divisaOrigen.nombre} son ${cantidadConvertida.toFixed(2)} ${divisaDestino.nombre}.`;
  }
  
function mostrarFormulario() {
    const formularioAgregarMoneda = document.getElementById("formularioAgregarMoneda");
    formularioAgregarMoneda.style.display = "block";
    }
    
function agregarMoneda() {
   
    const nombreMoneda = document.getElementById("nombreMoneda").value;
    const tasaCambioMoneda = document.getElementById("tasaCambioMoneda").value;
    const nuevaMoneda = new Moneda(nombreMoneda, tasaCambioMoneda);
    monedas.push(nuevaMoneda);
    localStorage.setItem("monedas", JSON.stringify(monedas));
    document.getElementById("nombreMoneda").value = "";
    document.getElementById("tasaCambioMoneda").value = "";
    const option = document.createElement("option");
    option.value = monedas.length - 1;
    option.text = nuevaMoneda.nombre;
    selectDivisaOrigen.add(option); 
    const option2 = document.createElement("option");
    option2.value = monedas.length - 1;
    option2.text = nuevaMoneda.nombre;
    selectDivisaDestino.add(option2);
    const formularioAgregarMoneda = document.getElementById("formularioAgregarMoneda");
    formularioAgregarMoneda.style.display = "none";
    }
window.addEventListener("beforeunload", () => {
        localStorage.setItem("monedas", JSON.stringify(monedas));
      });