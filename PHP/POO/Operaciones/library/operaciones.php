<?php

class Operacion{

    public $numeroUno;
    public $numeroDos;

    public $suma;
    public $resta;
    public $multiplicacion;
    public $division;

    public function sumar($numeroUno, $numeroDos) {
        $this->numeroUno = $numeroUno;
        $this->numeroDos = $numeroDos;
        $this->suma = $this->numeroUno + $this->numeroDos;
        return $this->suma;
    }

    public function restar($numeroUno, $numeroDos) {
        $this->numeroUno = $numeroUno;
        $this->numeroDos = $numeroDos;
        $this->resta = $this->numeroUno - $this->numeroDos;
        return $this->resta;
    }

    public function multiplicar($numeroUno, $numeroDos) {
        $this->numeroUno = $numeroUno;
        $this->numeroDos = $numeroDos;
        $this->multiplicacion = $this->numeroUno * $this->numeroDos;
        return $this->multiplicacion;
    }

    public function dividir($numeroUno, $numeroDos) {
        $this->numeroUno = $numeroUno;
        $this->numeroDos = $numeroDos;
        $this->division = $this->numeroUno / $this->numeroDos;
        return $this->division;
    }
}

?>