const express = require('express')
const { saveEmployeeDetails, getEmployeeDataUsingDepatmentModel } = require('../controllers/employee')
const router =express.Router()

router.post('/save', saveEmployeeDetails )
router.get('/employees',getEmployeeDataUsingDepatmentModel)
module.exports = router