var express = require('express')
var route = express.Router()
const loopsController = require('../controllers/loopsController')

route.get('/', loopsController.index)

module.exports = route