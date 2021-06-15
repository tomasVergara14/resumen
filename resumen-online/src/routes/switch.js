var express = require('express')
var route = express.Router()
const switchController = require('../controllers/switchController')

route.get('/', switchController.index)


module.exports = route;