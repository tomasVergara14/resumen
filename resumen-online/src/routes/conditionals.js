
var express = require('express')
var route = express.Router();
const conditionalsController = require('../controllers/conditionalsController')

route.get('/', conditionalsController.index)



module.exports = route