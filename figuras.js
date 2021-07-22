//Código del Cuadrado
console.group("Cuadrado");



function perimetroCuadrado(lado){
 return lado * 4;
} 

function areaCuadrado(lado) {
    return lado * lado;
}


console.groupEnd();

//----Código del Triangulo
console.group("Triángulos");


function perimetroTriangulo(lado1,lado2,base){
    return lado1+lado2+base;
}

function areaTriangulo(base,altura) {
    return (base*altura) / 2;
}

console.groupEnd();

//----Código del círculos
console.group("Circulos");



// Diámetro


function diametroCirculo (radio) {
    return radio * 2;
}

//PI
const PI = Math.PI;


// Circunferencia


function perimetroCirculo(radio) {
   const diametro = diametroCirculo(radio);
   return diametro * PI;
}

// Área

function areaCirculo(radio){
    return (radio * radio)*PI;
}
console.groupEnd();

//---Output Cuadrado.

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

// ---Output triángulo
//Perímetro

function calcularPerimetroTriangulo() {
    const inputl1 = document.getElementById("InputTriangulo_l1");
    const valuel1 = inputl1.value;
    const inputl2 = document.getElementById("InputTriangulo_l2");
    const valuel2 = inputl2.value;
    const inputb1 = document.getElementById("InputTriangulo_b1");
    const valueb1 = inputb1.value;

    const perimetro = perimetroTriangulo(valuel1,valuel2,valueb1);
    alert(perimetro);
}

//Área
function calcularAreaTriangulo() {
    const inputb2 = document.getElementById("InputTriangulo_b2");
    const valueb2 = inputb2.value;
    const inputa = document.getElementById("InputTriangulo_a");
    const valuea = inputa.value;

    const area = areaTriangulo(valueb2,valuea);
    alert(area);
}

//---Output Círculo

