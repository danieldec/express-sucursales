'use strict'

class Sucursales{
    constructor(idSucursal,descripcion,idCanal){
        this.idSucursal = idSucursal;
        this.descripcion = descripcion;
        this.idCanal = idCanal;
    }
}
const sucursales = [new Sucursales(100, "Mega La Luna", 1), new Sucursales(2244,"Elektra",1)]
module.exports = sucursales;