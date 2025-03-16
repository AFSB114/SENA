<?php

class Empleado
{
    public function __construct(
        private int    $id,
        private string $nombre,
        private string $apellido,
        private string $cargo,
        private int    $valDia,
        private int    $numDias
    )
    {
    }

    public function getId(): int
    {
        return $this->id;
    }

    public function setId(int $id): void
    {
        $this->id = $id;
    }

    public function getNombre(): string
    {
        return $this->nombre;
    }

    public function setNombre(string $nombre): void
    {
        $this->nombre = $nombre;
    }

    public function getApellido(): string
    {
        return $this->apellido;
    }

    public function setApellido(string $apellido): void
    {
        $this->apellido = $apellido;
    }

    public function getCargo(): string
    {
        return $this->cargo;
    }

    public function setCargo(string $cargo): void
    {
        $this->cargo = $cargo;
    }

    public function getValDia(): int
    {
        return $this->valDia;
    }

    public function setValDia(int $valDia): void
    {
        $this->valDia = $valDia;
    }

    public function getNumDias(): int
    {
        return $this->numDias;
    }

    public function setNumDias(int $numDias): void
    {
        $this->numDias = $numDias;
    }
}
