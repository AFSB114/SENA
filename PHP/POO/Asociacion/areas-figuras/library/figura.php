<?php

class Figura
{
    public function __construct(
        private int $base,
        private int $altura
    ) {}

    public function setBase(int $base) {
        $this->base = $base;
    }

    public function getBase(): int {
        return $this->base;
    }

    public function setAltura(int $altura) {
        $this->altura = $altura;
    }

    public function getAltura(): int {
        return $this->altura;
    }
}
