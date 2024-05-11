const express = require('express')

const TransactionController = require('../Controllers/TransactionController')

const Routes = express.Router();

Routes.post('/addTransaction', TransactionController.addTransactions)


module.exports = Routes

