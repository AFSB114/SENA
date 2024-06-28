let arreglo = [];
arreglo = [1, 2, 3, 4, 5];
let num1 = arreglo[0];
let num2 = arreglo[2];
let num3 = arreglo[4];
// console.log(num1, num2, num3);
// let cantDatos = arreglo.length;
// let iterar;
// for (iterar = 0; iterar < cantDatos; iterar++) {
//     console.log(arreglo[iterar]);
// }
arreglo.forEach(function (elemento) {
    console.log(elemento);
});