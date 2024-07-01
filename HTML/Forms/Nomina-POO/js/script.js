let empleados = []
let indiceEmple = 0

class Nomina {
    constructor(indiceEmple) {
        this._id = empleados[indiceEmple].id
        this._nombre = empleados[indiceEmple].nombre
        this._apellido = empleados[indiceEmple].apellido
        this._cargo = empleados[indiceEmple].cargo
    }
}

function nomina() {

}

class Empleado {
    constructor(id, nombre, apellido, cargo, valDia, numDiasTra) {
        this._id = id
        this._nombre = nombre
        this._apellido = apellido
        this._cargo = cargo
        this._valDia = valDia
        this._numDiasTra = numDiasTra
    }

    get id() {
        return this._id
    }

    get nombre() {
        return this._nombre
    }

    get apellido() {
        return this._apellido
    }

    get cargo() {
        return this._cargo
    }

    get valDia() {
        return this._valDia
    }

    get numDiasTra() {
        return this._numDiasTra
    }
}

function agregar() {
    let idElement = document.getElementById('id')
    let nombreElement = document.getElementById('nombre')
    let apellidoElement = document.getElementById('apellido')
    let cargoElement = document.getElementById('cargo')
    let valDiaElement = document.getElementById('valDia')
    let numDiasTraElement = document.getElementById('numDiasTra')

    let id = parseInt(idElement.value)
    let nombre = nombreElement.value
    let apellido = apellidoElement.value
    let cargo = cargoElement.value
    let valDia = parseInt(valDiaElement.value)
    let numDiasTra = parseInt(numDiasTraElement.value)

    idElement.value = ''
    nombreElement.value = ''
    apellidoElement.value = ''
    cargoElement.value = ''
    valDiaElement.value = ''
    numDiasTraElement.value = ''

    empleados.push(new Empleado(id, nombre, apellido, cargo, valDia, numDiasTra))
}