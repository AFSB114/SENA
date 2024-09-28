<?php

class Area
{
    public int $cuadrado;
    public int $rectangulo;
    public float $triangulo;

    public function __construct(
        private Figura $figura
    ) {}

    public function calcAreaCuad() : int {
        $this->cuadrado = $this->figura->getBase() * $this->figura->getAltura();
        return $this->cuadrado;
    }

    public function calcAreaRect() : int {
        $this->rectangulo = $this->figura->getBase() * $this->figura->getAltura();
        return $this->rectangulo;
    }

    public function calcAreaTria() : int | float {
        $this->triangulo = $this->figura->getBase() * $this->figura->getAltura() / 2;
        return $this->triangulo;
    }
}
