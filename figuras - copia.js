//Código del Cuadrado
console.group("Cuadrado");

// const ladoCuadrado = 5;
// console.log ("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

function perimetroCuadrado(lado){
 return lado * 4;
} 
// console.log( "El perímetro del cuadrado es:" + perimetroCuadrado +"cm");

// const areaCuadrado = ladoCuadrado * ladoCuadrado;
function areaCuadrado(lado) {
    return lado * lado;
}
// console.log( "El área del cuadrado es:" + areaCuadrado + "cm^2");

console.groupEnd();

//Código del Triangulo
console.group("Triángulos");

// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;
// console.log (
//     "Los lados del triángulo miden: " 
//     + ladoTriangulo1
//     + "cm, " 
//     + ladoTriangulo2
//     + "cm, "
//     + baseTriangulo
//     + "cm"
//     );

function perimetroTriangulo(lado1,lado2,base){
    return lado1 + lado2 + base;
}

function areaTriangulo(base,altura) {
    return (base * altura) / 2;
}
// const alturaTriangulo = 5.5;

// console.log("La altura del triángulo es de: " + alturaTriangulo + "cm");

// const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + alturaTriangulo;

// console.log ("El perímetro del triángulo es: " + perimetroTriangulo + "cm");

// const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;

// console.log ("El área del triángulo es de: " + areaTriangulo + "cm^2");

console.groupEnd();

//Código del círculos
console.group("Circulos");

// // Radio
// const radioCirculo = 4;
// console.log("El rádio del círculo es: " + radioCirculo +"cm");

// Diámetro
// const diametroCirculo = radioCirculo *2;
// console.log("El diámetro del círculo es: " + diametroCirculo +"cm");

function diametroCirculo (radio) {
    return radio * 2;
}

//PI
const PI = Math.PI;
// console.log("PI es " + PI);

// Circunferencia
// const perimetroCirculo = diametroCirculo * PI;
// console.log("El perímetro del círculo es: " + perimetroCirculo +"cm");

function perimetroCirculo(radio) {
   const diametro = diametroCirculo(radio);
   return diametro * PI;
}

// Área
// console.log("El área del círculo es: " + areaCirculo + "cm^2");
// const areaCirculo = (radioCirculo * radioCirculo) * PI;

function areaCirculo(radio){
    return (radio * radio)*PI;
}
console.groupEnd();

//Output Cuadrado.

function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = areaCuadrado(value);
    alert(perimetro);
}
