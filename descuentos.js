const precioOriginal = 120;
const descuento = 18;

function calcularPrecioConDescuento(precio, descuento) {
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = ((precio * porcentajePrecioConDescuento) /100);
    
    return precioConDescuento;
}

const cupones = [
    "Dani",
    "cupon",
    "Fer"
];

function onClickButtonPriceDiscount() {
    const InputPrice = document.getElementById("InputPrice");
    const priceValue = InputPrice.value;

    const InputCupon = document.getElementById("InputCupon");
    const cuponValue = InputCupon.value;

    let descuento;

    switch(cuponValue) {
      case cupones[0]: // "JuanDC_es_Batman"
        descuento = 15;
      break;
      case cupones[1]: // "pero_no_le_digas_a_nadie"
        descuento = 30;
      break;
      case cupones[2]: // "es_un_secreto"
        descuento = 25;
      break;
    }

    if (!cupones.includes(cuponValue)) {
        alert("El cupón " + cuponValue + " no es válido");
    }
  
    
    const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);

    const resultPrice = document.getElementById("ResultPrice");
    resultPrice.innerText = "El precio con descuento es $" + precioConDescuento;
}


/*console.log({
    precioOriginal,
    descuento,
    porcentajePrecioConDescuento,
    precioConDescuento
});*/