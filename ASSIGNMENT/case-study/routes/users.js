const express = require('express')
const usersRoutes = express.Router()
const userController = require('../controllers/users')

usersRoutes.post('/register',userController.register)
usersRoutes.post('/login',userController.login)


module.exports = usersRoutes