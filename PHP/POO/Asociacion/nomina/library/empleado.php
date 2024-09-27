<?php

class Empleado
{
    public function __construct(
        public int $id,
        public string $nombre,
        public string $apellido,
        public string $cargo,
        private int $valDia,
        private int $numDias
    ) {}

    public function getValDia() : int {
        return $this->valDia;
    }

    public function setValDia(int $valDia) {
        $this->valDia = $valDia;
    }

    public function getNumDias() : int {
        return $this->numDias;
    }

    public function setNumDias(int $numDias){
        $this->numDias = $numDias;
    }
}
