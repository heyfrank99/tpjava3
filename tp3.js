/*
// 1- Crear un array llamado meses y que almacene el nombre de los doce meses del año. Mostrar por pantalla en forma de lista los doce nombres del arreglo.

 let meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

for (const mes of meses) {
    console.log(mes);
 }












/* 2-  Crear un script que solicite al usuario mediante un prompt el nombre de ciudades y almacenarlas en un arreglo, cuando el usuario selecciona cancelar se debe mostrar el arreglo generado, luego realizar las siguientes acciones:
 Mostrar la longitud del arreglo.
 Mostrar en el documento web los ítems de las posiciones primera, tercera y última.
 Añade en última posición la ciudad de París.
 Escribe por pantalla el elemento que ocupa la segunda posición.
 Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'.*/

/*
 let ciudades = [];

 let ciudad = "";


 while (ciudad != null) {
     ciudad = prompt (`ingrese el nombre de una ciudad`);
     if (ciudad != null) {
         ciudades.push(ciudad);
     }
 }
 console.log(`El arreglo tiene ${ciudades.length} ciudades`);
 console.log(`Elemento 1er posicion: ${ciudades[0]}`);
 console.log(`Elemento 3er posicion: ${ciudades[2]}`);
 console.log(`Elemento ultima posicion: ${ciudades[ciudades.length-1]}`);
 ciudades.push("Paris");
console.log(`Elemento 2da posicion: ${ciudades[1]}`);

 console.log(`Arreglo de ciudades`);
 ciudades.splice(1,1,"Barcelona");
 for (const elem of ciudades) {
     console.log(elem);
 }


/*






// 3- Escribir un script que simule el lanzamiento de dos dados. Hacer uso de la función Math.random para obtener números aleatorios entre 1 y 6 para cada uno de los lanzamientos de los dados. Sumar el resultado de lanzar dos dados y anotar en un array el número de apariciones de dicha suma, repitiendo 50 veces esta operación.


let apariciones = [];
function lanzarDado() {
    return Math.floor (Math.random() * 6) + 1;
}
for (let i = 0; i < 50; i++) {
    let dadoUno = lanzarDado();
    let dadoDos = lanzarDado();
    let suma = dadoUno + dadoDos;

    if (!apariciones[suma]) {
        apariciones[suma] = 1;
    } else {
        apariciones[suma]++;
    }
}
for (let j = 2; j <= 12 ; j++) {
    console.log('Suma', j, 'aparece', apariciones[j] || 0, 'veces.');
}








// 4- Escribir el código de una función a la que se pasa como parámetro un número entero y devuelve como resultado una cadena de texto que indica si el número es par o impar. Mostrar por pantalla el resultado devuelto por la función.

let numero = parseInt(prompt('Ingrese un numero!'));
function parImpar(numero) {
    if (numero % 2 === 0) {
        console.log('El numero es par');
    } else {
        console.log('El numero es impar');
    }
}
let resultado = parImpar(numero);





// 5- Definir una función que muestre información sobre una cadena de texto que se le pasa como argumento. A partir de la cadena que se le pasa, la función determina si esa cadena está formada sólo por mayúsculas, sólo por minúsculas o por una mezcla de ambas.


let texto = prompt('Ingrese una cadena de texto!');
    function cadenaTexto(texto) {
        if (texto === texto.toUpperCase()) {
            console.log('La cadena esta formada solo por MAYÚSC');
        } else if (texto === texto.toLowerCase()) {
            console.log('La cadena esta formada solo por minúsc');
        } else {
            console.log('La cadena esta formada por MAYÚSC y minúsc');
        }
    }
    
    let resultado = cadenaTexto(texto);
    console.log(resultado);





// 6- Solicitar por pantalla al usuario ingresar el valor de los lados de un rectángulo, luego crear una función para calcular su perímetro y mostrarlo por pantalla.
// La fórmula del perímetro  es p = 2*(a +b)

let base = parseInt(prompt('Ingrese la base del rectangulo'));
let altura = parseInt(prompt('Ingrese la altura del rectangulo'));
function perimetroRectangulo(base, altura) {
    return (2 * (base + altura));
}
console.log('El perimetro del rectangulo es: ' + perimetroRectangulo(base, altura));





// 7- Escriba un script que muestre la tabla de multiplicar de un número ingresado por pantalla, la creación de la tabla debe ser realizada con una función y mostrar solo los resultados del 1 al 10 del número elegido por el usuario.

let numero = parseInt(prompt("Ingresa un número:"));

function tabla(numero) {
  for (let i = 1; i <= 10; i++) {
    let resultado = numero * i;
    console.log(numero + " x " + i + " = " + resultado);
  }
}

tabla(numero);*/