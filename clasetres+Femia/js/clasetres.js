
//Desafío

// UNO Pedir número mediante prompt y sumarle otro número en cada repetición, realizando una salida por cada resultado

alert("Por favor, inserte un número");
let numero1 = Number(prompt("Introduzca un número:"));
let resultadoDeSuma;

for (let i = 0; i <= 10; i++) { 
    resultadoDeSuma = numero1 + 20;
    console.log(numero1 + ' + 20 = ' + resultadoDeSuma);
    numero1 += 20; 

}

// DOS Pedir un texto mediante prompt, concatenar un valor en cada repetición, realizando una salida por cada resultado, hasta que se ingresa “ESC”.
 
let nombre = "";
let listado = "";
let contar = 0;

alert('Introduzca los nombres de los participantes. Cuando desee salir del programa escriba "ESC" en la caja de texto, y le aparaceran los resultados en la consola')
 nombre = prompt("Introduzca un nombre");

while(nombre == null || nombre == "") {
    nombre = prompt("Introduzca un nombre");
 }

    nombre = nombre.toUpperCase();

 while (nombre != "ESC") {
     contar++;
     console.log(contar + '- ' + nombre);
     nombre = prompt("Introduzca un nombre");
     while(nombre == null || nombre == "") {
         nombre = prompt("Introduzca un nombre");
     }
     nombre = nombre.toUpperCase();

 }

 // TRES Pedir un número por prompt, repetir la salida del mensaje “Hola” la cantidad de veces ingresada.

 let numeroTres = 0;
let contarTres = 0;

alert("Ingresar un número y la consola lo saludará las veces que lo indique");
numeroTres = Number(prompt("Ingrese un número:"));

while(numeroTres == null || numeroTres == "" || isNaN(numeroTres) || numeroTres <= 0) {
    numeroTres = Number(prompt("Ingrese un número:"));
}

while (contarTres < numeroTres) {
    console.log((contarTres + 1) + "- Hola");
    contarTres += 1;
}

for (let i = 0; i < numero; i++) {
    console.log((i + 1) + '- ' + "Hola");
 }

do {
    console.log((contarTres + 1) + '- ' + "Hola");
    contarTres = contarTres + 1;
}

 while(contarTres < numeroTres);
