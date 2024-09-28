<?php

class Saludo
{
    public string $saludar;

    public function saluda(string $saludar): string
    {
        $this->saludar = $saludar;
        return $this->saludar;
    }
}