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
    const input1 = document.getElementById("InputTriangulo_l1");
    const value1 = Number (input1.value);
    const input2 = document.getElementById("InputTriangulo_l2");
    const value2 = Number (input2.value);
    const input3 = document.getElementById("InputTriangulo_b1");
    const value3 =  Number (input3.value);

    const perimetro = perimetroTriangulo(value1,value2,value3);
    alert(perimetro);
}

//Área
function calcularAreaTriangulo() {
    const input4 = document.getElementById("InputTriangulo_b2");
    const value4 = Number (input4.value);
    const input5 = document.getElementById("InputTriangulo_a");
    const value5 = Number (input5.value);

    const area = areaTriangulo(value4,value5);
    alert(area);
}

//---Output Círculo

function calcularCircunferenciaCirculo() {
    const input6 = document.getElementById("InputCirculo");
    const value6 = Number (input6.value);

    const perimetro = perimetroCirculo(value6);
    alert(perimetro);
}

function calcularAreaCirculo() {
    const input7 = document.getElementById("InputCirculo");
    const value7 = Number (input7.value);

    const perimetro = areaCirculo(value7);
    alert(perimetro);
}
