const express = require('express')
const router = express.Router()
const arrayController = require('../controllers/arraysController')

router.get('/', arrayController.index)


module.exports = router;