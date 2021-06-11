
var express = require('express')
var route = express.Router()
const letConstController = require('../controllers/letConstController')


route.get('/', letConstController.index)

module.exports = route