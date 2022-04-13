const express = require('express')
const router = express.Router()
const queryController = require('../controllers/query')

router.post('/add-query', queryController.addqueries)
router.get('/query', queryController.getAllqureies)

module.exports = router
