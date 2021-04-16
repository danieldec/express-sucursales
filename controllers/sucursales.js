'use strict'

const sucursales = require('../models/sucursales');

function getSucursales(request,response) {
    response.status(200).send({ sucursales });
}

module.exports = {
    getSucursales
}