<?php

class Empleado
{
    public function __construct(
        private int $id,
        private string $nombre,
        private string $apellido,
        private string $cargo,
        private int $valDia,
        private int $numDias
    ) {}

    public function getId() : int { 
        return $this->id;
    }

    public function setId(int $id) {
        $this->id = $id;
    }

    public function getNombre() : string {
        return $this->nombre;
    }

    public function setNombre(string $nombre) {
        $this->nombre = $nombre;
    }

    public function getApellido() : string {
        return $this->apellido;
    }

    public function setApellido(string $apellido) {
        $this->apellido = $apellido;
    }

    public function getCargo() : string {
        return $this->cargo;
    }

    public function setCargo(string $cargo) {
        $this->cargo = $cargo;
    }

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
