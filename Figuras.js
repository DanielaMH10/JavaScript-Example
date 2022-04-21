
//Cuadrado
console.group("Cuadrado");
//const ladoCuadrado =5;
//console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

function perimetroCuadrado (lado) {
    return lado * 4; 
}
//console.log("El perímetro del cuadrado es: " + perimetroCuadrado + "cm");

function areaCuadrado(lado){
    return lado * lado;
}
//console.log("El área del cuadrado es: " + areaCuadrado + "cm^2");
console.groupEnd();

//Triángulo
console.group("Triángulo");
//const ladoTriangulo1 =6;
//const ladoTriangulo2 =6;
//const baseTriangulo =4;
//console.log("Los lados del triángulo miden: " + ladoTriangulo1 + "cm - " + ladoTriangulo1 + "cm - " + baseTriangulo + "cm");

//const alturaTriangulo =5.5;
//console.log("La altura del triángulo es de: " + alturaTriangulo + "cm");

function perimetroTriangulo(lado,lado2,base) {
    return lado  + lado2 + base;
}
//console.log("El perímetro del triángulo es de: " + perimetroTriangulo + "cm");

function areaTriangulo(base,altura) {
    return (base*altura) / 2;
}
//console.log("El área del triángulo es de: " + areaTriangulo);
console.groupEnd();

//Círculo 
console.group("Círculo");

//Radio
//const radioCirculo=4;
//console.log("El radio del círculo es de: " + radioCirculo + "cm");

//Diámetro
function diametroCirculo(radio) {
    return radio * 2;
}
    
//console.log("El diámetro del círculo es de: " + diametroCirculo + "cm");

//PI
const PI = Math.PI;
console.log("PI es: " + PI);

//Circuferencia
function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}
//console.log("El perímetro del círculo es de: " + perimteroCirculo + "cm");

//Área
function areaCirculo(radio) {
    return (radio* radio) * PI;
}
//console.log("El área del círculo es de: " + areaCirculo + "cm");
console.groupEnd();