<?php

$tienda = [];
$tienda = [
    [
        'producto' => 'Arroz',
        'tipoProducto' => 'Granos',
        'tipoUnidad' => 'Gramos',
        'cantidad' => 1000,
        'precio' => 2450
    ],
    [
        'producto' => 'Papa',
        'tipoProducto' => 'Fruver',
        'tipoUnidad' => 'Gramos',
        'cantidad' => 500,
        'precio' => 1000
    ],
    [
        'producto' => 'Mora',
        'tipoProducto' => 'Fruver',
        'tipoUnidad' => 'Gramos',
        'cantidad' => 500,
        'precio' => 1500
    ],
    [
        'producto' => 'Trucha',
        'tipoProducto' => 'Carnes',
        'tipoUnidad' => 'Gramos',
        'cantidad' => 1000,
        'precio' => 9000
    ],
    [
        'producto' => 'Pollo entero',
        'tipoProducto' => 'Carnes',
        'tipoUnidad' => 'Gramos',
        'cantidad' => 500,
        'precio' => 4500
    ]
];

$nuevoProducto = [
    'producto' => 'Pollo entero',
    'tipoProducto' => 'Carnes',
    'tipoUnidad' => 'Gramos',
    'cantidad' => 500,
    'precio' => 4500
];
$tienda[] = $nuevoProducto;

var_dump($tienda);

$numeroRegistros = count($tienda);
$listaBusqueda = [];

for ($iteracion = 0; $iteracion < $numeroRegistros; $iteracion++) {
    if ($tienda[$iteracion]['tipoProducto'] == 'Fruver') {
        $listaBusqueda[] = $tienda[$iteracion];
    }
}

var_dump($tienda);
var_dump($listaBusqueda);