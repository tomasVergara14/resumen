var express = require('express')
var router = express.Router()
const functionsController = require('../controllers/functionsController')

router.get('/', functionsController.index)

module.exports = router