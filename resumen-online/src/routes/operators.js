var express = require('express')
var route = express.Router()
const operatorsController = require('../controllers/operatorsController')

route.get('/', operatorsController.index)

module.exports = route