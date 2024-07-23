console.log("Ejercicio 2: Arreglos.");
//1. Crear un array vacío, luego generar 10 números al azar y guardarlos en un array. 
//Mostrar en consola el resultado del array.
// Crear un array vacío.
let numeros = [];
// Generar 10 números al azar y guardarlos en el array.
for (let i = 0; i < 10; i++) {
    let numeroAleatorio = Math.floor(Math.random() * 10); // Genera un número entre 0 y 10
    numeros.push(numeroAleatorio);
}
console.log("Los 10 números al azar son: " + (numeros));



//2. El usuario deberá ingresar un string con varias palabras separadas por coma en un popup 
//y se deben convertir en un array, 
//(el usuario ingresa: '1,2,3,4,5' y se convierte en [1,2,3,4,5]). Mostrar en consola dicho resultado.

// Función para convertir el string ingresado en un array.
function convertirStringAArray() {
    let inputString = prompt("Ingresa varias palabras separadas por comas:");
    // Convertir el string en un array, eliminando espacios en blanco adicionales.
    let arrayResultante = inputString.split(',').map(item => item.trim());
    console.log(arrayResultante);
}
// Llamar a la función
convertirStringAArray();


//3. De acuerdo al array [10,40,30,20,15,5], imprime lo siguiente: El arreglo ordenado de menor a mayor, 
//muestra el número menor y el número mayor. 
//Tip: Busca en google los métodos de JavaScript que regresan el mayor y menor elemento de un arreglo.
// Array inicial.
let array = [10, 40, 30, 20, 15, 5];
// Ordenar el array de menor a mayor.
array.sort((a, b) => a - b);  //https://desarrolloweb.com/articulos/ordenacion-arrays-javascript-sort
// Obtener el número menor y el número mayor.
let min = Math.min(...array);
let max = Math.max(...array);
console.log("Arreglo ordenado de menor a mayor:", array);
console.log("Número menor:", min);
console.log("Número mayor:", max);
