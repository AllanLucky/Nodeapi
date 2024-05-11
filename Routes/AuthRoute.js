const express = require('express')

const AuthController = require('../Controllers/AuthController')

const Routes = express.Router();


Routes.post('/addUser', AuthController.addUser)
Routes.get('/getAllUsers', AuthController.getUsers)





module.exports = Routes