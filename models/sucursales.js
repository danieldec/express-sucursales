'use strict'

class Sucursales{
    constructor(idSucursal,descripcion,idCanal){
        this.sucursal = idSucursal;
        this.descripcion = descripcion;
        this.canal = idCanal;
    }
}
const sucursales = [new Sucursales(100, "Mega La Luna", 1), new Sucursales(2244,"Elektra",1)]
module.exports = sucursales;