<?php

const SAL_MIN = 1300000;

class Nomina
{
    private int $salario;
    private int $subTrans;
    private float $salud;
    private float $pension;
    private float $arl;
    private float $retencion;
    private float $pagoTot;

    public function __construct(
        private Empleado $empleado
    ) {
        $this->calcSalario();
        $this->calcSubTrans();
        $this->calcSalud();
        $this->calcPension();
        $this->calcArl();
        $this->calcRetencion();
        $this->calcPagoTot();
    }

    private function calcSalario(): void
    {
        $this->salario = $this->empleado->getNumDias() * $this->empleado->getValDia();
    }

    public function getSalario() : int {
        return $this->salario;
    }

    private function calcSubTrans(): void
    { 
        $this->subTrans = ($this->salario < SAL_MIN * 2) ? 120000 : 0;
    }

    public function getSubTrans() : int {
        return $this->subTrans;
    }

    private function calcSalud(): void
    {
        $this->salud = $this->salario * 0.12;
    }

    public function getSalud() : float {
        return $this->salud;
    }

    private function calcPension(): void
    {
        $this->pension = $this->salario * 0.16;
    }

    public function getPension() : float {
        return $this->pension;
    }

    private function calcArl(): void
    {
        $this->arl = $this->salario * 0.052;
    }

    public function getArl() : float {
        return $this->arl;
    }

    private function calcRetencion(): void
    {
        $this->retencion = match (true) {
            $this->salario > SAL_MIN * 6  => $this->salario * 0.02,
            $this->salario > SAL_MIN * 8  => $this->salario * 0.04,
            $this->salario > SAL_MIN * 12 => $this->salario * 0.08,
            default => 0
        };
    }

    public function getRetencion() : float {
        return $this->retencion;
    }

    private function calcPagoTot(): void
    {
        $this->pagoTot = $this->salario + $this->subTrans - ($this->salud + $this->pension + $this->arl + $this->retencion);
    }

    public function getPagoTot() : float {
        return $this->pagoTot;
    }
}
