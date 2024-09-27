<?php
class Operaciones
{
    private $suma;
    private $resta;
    private $multiplicacion;
    private $division;

    public function __construct(
        private Numero $num1,
        private Numero $num2
    ) {}

    public function sumar()
    {
        $num1 = $this->num1->getNum();
        $num2 = $this->num2->getNum();
        $this->suma = $num1 + $num2;
        return $this->suma;
    }

    public function restar()
    {
        $num1 = $this->num1->getNum();
        $num2 = $this->num2->getNum();
        $this->resta = $num1 - $num2;
        return $this->resta;
    }

    public function multiplicar()
    {
        $num1 = $this->num1->getNum();
        $num2 = $this->num2->getNum();
        $this->multiplicacion = $num1 * $num2;
        return $this->multiplicacion;
    }

    public function dividir()
    {
        $num1 = $this->num1->getNum();
        $num2 = $this->num2->getNum();
        
        if ($num2 === 0) {
            throw new Exception("Error: División por cero.");
        }
        
        $this->division = $num1 / $num2;
        return $this->division;
    }
}