<?php
class Numero
{
    public function __construct(
        private $num
    ) {}

    public function getNum()
    {
        return $this->num;
    }

    public function setNum($num)
    {
        $this->num = $num;
    }
}
