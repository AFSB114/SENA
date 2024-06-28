let tienda = [];

tienda = [
    { producto: 'Arroz', tipoProducto: 'Granos', tipoUnidad: 'Gramos', cantidad: 1000, precio: 2450 },
    { producto: 'Papa', tipoProducto: 'Fruver', tipoUnidad: 'Gramos', cantidad: 500, precio: 1000 },
    { producto: 'Mora', tipoProducto: 'Fruver', tipoUnidad: 'Gramos', cantidad: 500, precio: 1500 },
    { producto: 'Trucha', tipoProducto: 'Carnes', tipoUnidad: 'Gramos', cantidad: 1000, precio: 9000 },
    { producto: 'Pollo entero', tipoProducto: 'Carnes', tipoUnidad: 'Gramos', cantidad: 500, precio: 4500 },
];

let nuevoProducto;

nuevoProducto = { producto: 'Pollo entero', tipoProducto: 'Carnes', tipoUnidad: 'Gramos', cantidad: 500, precio: 4500 };
tienda.push(nuevoProducto);

console.log(tienda);

let numeroRegistros;
numeroRegistros = tienda.length;

let iteracion;
let listaBusqueda = [];

for (iteracion = 0; iteracion < numeroRegistros; iteracion++) {
    if (tienda[iteracion].tipoProducto == 'Fruver') {
        listaBusqueda.push(tienda[iteracion]);
    } else {
        ;
    }
}

console.log(tienda);
console.log(listaBusqueda);