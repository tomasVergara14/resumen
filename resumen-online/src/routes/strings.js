
var express = require('express')
var route = express.Router()
const stringsController = require('../controllers/stringsController')

route.get('/', stringsController.index)

module.exports = route