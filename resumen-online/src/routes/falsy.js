var express = require('express')
var route = express.Router()
const falsyController = require('../controllers/falsyController')

route.get('/', falsyController.index)


module.exports = route