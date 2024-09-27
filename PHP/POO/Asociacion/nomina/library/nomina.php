<?php

const SAL_MIN = 1300000;

class Nomina
{
    public int $salario;
    public int $subTrans;
    public float $salud;
    public float $pension;
    public float $arl;
    public float $retencion;
    public float $pagoTot;

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

    public function calcSalario() : int {
        $this->salario = $this->empleado->getNumDias() * $this->empleado->getValDia();
        return $this->salario;
    }

    public function calcSubTrans() : int {
        $this->subTrans = ($this->salario < SAL_MIN * 2) ? 120000 : 0;
        return $this->subTrans;
    }

    public function calcSalud() : float {
        $this->salud = $this->salario * 0.12;
        return $this->salud;
    }

    public function calcPension() : float {
        $this->pension = $this->salario * 0.16;
        return $this->pension;
    }

    public function calcArl() : float {
        $this->arl = $this->salario * 0.052;
        return $this->arl;
    }

    public function calcRetencion() : float {
        $this->retencion = match (true) {
            $this->salario > SAL_MIN * 6  => $this->salario * 0.02,
            $this->salario > SAL_MIN * 8  => $this->salario * 0.04,
            $this->salario > SAL_MIN * 12 => $this->salario * 0.08,
            default => 0
        };
        return $this->retencion;
    }

    public function calcPagoTot() : float {
        $this->pagoTot = $this->salario + $this->subTrans - ($this->salud + $this->pension + $this->arl + $this->retencion);
        return $this->pagoTot;
    }
}
