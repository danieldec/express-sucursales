'use strict'
const express = require('express');
const api = express.Router();
const SucursalController = require('../controllers/sucursales');

api.get('/sucursales',SucursalController.getSucursales);

module.exports = api;